"use client";

import { Markdown } from "@/components/chat/markdown/Markdown";
import { CreateEntry } from "@/components/chat/tools/contentful/CreateEntry";
import { GetContentType } from "@/components/chat/tools/contentful/GetContentType";
import { ListContentTypes } from "@/components/chat/tools/contentful/ListContentTypes";
import { SearchEntries } from "@/components/chat/tools/contentful/SearchEntries";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    maxSteps: 5,
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch gap-4">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? (
            <Badge variant="default">You</Badge>
          ) : (
            <Badge variant="secondary">AI</Badge>
          )}
          <div className="flex flex-col gap-2 pt-2">
            {message.parts.map((part, i) => {
              console.log(part);

              const key = `${message.id}-${i}`;

              switch (part.type) {
                case "text":
                  return <Markdown key={key} {...part} />;
                case "tool-invocation":
                  const text =
                    /* @ts-ignore */
                    part?.toolInvocation?.result?.content?.[0]?.text;

                  if (!text) {
                    return;
                  }

                  const props = JSON.parse(text);

                  if (!props) {
                    return;
                  }

                  return (
                    <Card key={key}>
                      <CardHeader>
                        <CardTitle>
                          Tool:{" "}
                          {part.toolInvocation.toolName
                            .replaceAll("_", " ")
                            .toLocaleUpperCase()}
                        </CardTitle>
                        <CardDescription className="flex flex-rowg gap-1">
                          <Badge variant="outline">
                            id: {part.toolInvocation.toolCallId}
                          </Badge>
                          <Badge variant="outline">
                            step: {part.toolInvocation.step}
                          </Badge>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="overflow-auto">
                        {(() => {
                          switch (part.toolInvocation.toolName) {
                            case "get_content_type": {
                              return <GetContentType {...props} />;
                            }
                            case "list_content_types": {
                              return <ListContentTypes {...props} />;
                            }
                            case "get_entry":
                            case "update_entry":
                            case "create_entry": {
                              return <CreateEntry {...props} />;
                            }
                            case "search_entries": {
                              return <SearchEntries {...props} />;
                            }
                            default: {
                              return (
                                <pre>
                                  {JSON.stringify(part.toolInvocation, null, 2)}
                                </pre>
                              );
                            }
                          }
                        })()}
                      </CardContent>
                    </Card>
                  );
              }
            })}
          </div>
        </div>
      ))}
      {status === "submitted" && (
        <div className="flex flex-col gap-2 pt-2">
          <Skeleton className="w-full h-[20px] rounded-full" />
          <Skeleton className="w-[60%] h-[16px] rounded-full" />
          <Skeleton className="w-[80%] h-[12px] rounded-full" />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          disabled={status === "submitted" || status === "streaming"}
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 rounded shadow-xl bg-white disabled:bg-gray-500 disabled:text-gray-50 disabled:cursor-progress"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
