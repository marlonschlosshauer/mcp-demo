"use client";

import { Markdown } from "@/components/shared/markdown/Markdown";
import { GetEntry } from "@/components/chat/tools/contentful/GetEntry";
import { GetContentType } from "@/components/chat/tools/contentful/GetContentType";
import { ListContentTypes } from "@/components/chat/tools/contentful/ListContentTypes";
import { SearchEntries } from "@/components/chat/tools/contentful/SearchEntries";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useChat } from "@ai-sdk/react";
import { cn } from "../../lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { parseToolInvocationResult } from "@/lib/message";
import { PreviewPage } from "@/components/chat/tools/custom/PreviewPage";
import { PreviewBlock } from "@/components/chat/tools/custom/PreviewBlock";

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
              const key = `${message.id}-${i}`;

              console.log(part);

              switch (part.type) {
                case "text":
                  return (
                    <div
                      key={key}
                      className={cn(
                        message.role === "user"
                          ? "text-white bg-gray-950"
                          : "text-gray-950/80 bg-gray-200",
                        "mr-auto w-fit rounded-md px-3 py-2 text-left",
                      )}
                    >
                      <Markdown {...part} />
                    </div>
                  );

                case "tool-invocation":
                  const result = parseToolInvocationResult(part);

                  if (!result) {
                    return;
                  }

                  return (
                    <Dialog key={key}>
                      <DialogTrigger>
                        <p className="font-normal text-sm text-gray-700 hover:underline focus:underline">
                          <span className="font-sans">Tool call: </span>
                          <span className="font-mono">
                            {part.toolInvocation.toolName}()
                          </span>
                        </p>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Tool call details</DialogTitle>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-row flex-wrap gap-1">
                              <Badge variant="outline">
                                tool:{" "}
                                {part.toolInvocation.toolName
                                  .replaceAll("_", " ")
                                  .toLocaleUpperCase()}
                              </Badge>
                              <Badge variant="outline">
                                id: {part.toolInvocation.toolCallId}
                              </Badge>
                              <Badge variant="outline">
                                step: {part.toolInvocation.step}
                              </Badge>
                              {Object.entries(part.toolInvocation.args).map(
                                ([x, y], key) => (
                                  <Badge key={key}>
                                    {x}: {JSON.stringify(y)}
                                  </Badge>
                                ),
                              )}
                            </div>
                            <div className="overflow-auto">
                              {(() => {
                                switch (part.toolInvocation.toolName) {
                                  case "get_content_type": {
                                    return <GetContentType {...result} />;
                                  }
                                  case "list_content_types": {
                                    return <ListContentTypes {...result} />;
                                  }
                                  case "get_entry":
                                  case "update_entry":
                                  case "create_entry": {
                                    return <GetEntry {...result} />;
                                  }
                                  case "search_entries": {
                                    return <SearchEntries {...result} />;
                                  }
                                  case "preview_page": {
                                    return <PreviewPage {...result} />;
                                  }
                                  case "preview_block": {
                                    return <PreviewBlock {...result} />;
                                  }

                                  default: {
                                    return (
                                      <pre className="overflow-auto w-sm">
                                        {JSON.stringify(
                                          part.toolInvocation,
                                          null,
                                          2,
                                        )}
                                      </pre>
                                    );
                                  }
                                }
                              })()}
                            </div>
                          </div>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
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
