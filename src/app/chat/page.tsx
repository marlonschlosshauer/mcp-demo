"use client";

import { useChat } from "@ai-sdk/react";
import { useOptions } from "@/lib/options";
import { Message } from "@/components/chat/message/Message";
import { Loading } from "@/components/chat/message/Loading";

export default function Chat() {
  const { model } = useOptions();
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    maxSteps: 5,
  });

  console.log(messages);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch gap-4">
      {messages.map((message, key) => (
        <Message key={key} {...message} />
      ))}
      {status === "submitted" && <Loading />}
      <form onSubmit={(e) => handleSubmit(e, { body: { model } })}>
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
