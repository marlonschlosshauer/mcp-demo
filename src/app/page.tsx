"use client";

import { GetContentType } from "@/components/chat/tools/contentful/GetContentType";
import { ListContentTypes } from "@/components/chat/tools/contentful/ListContentTypes";
import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? "User: " : "AI: "}
          {message.parts.map((part, i) => {
            console.log(part);

            const key = `${message.id}-${i}`;

            switch (part.type) {
              case "text":
                return <div key={key}>{part.text}</div>;
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
                switch (part.toolInvocation.toolName) {
                  case "get_content_type": {
                    return <GetContentType key={key} {...props} />;
                  }
                  case "list_content_types": {
                    return <ListContentTypes key={key} {...props} />;
                  }
                  default: {
                    return (
                      <pre key={key}>
                        {JSON.stringify(part.toolInvocation, null, 2)}
                      </pre>
                    );
                  }
                }
            }
          })}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
