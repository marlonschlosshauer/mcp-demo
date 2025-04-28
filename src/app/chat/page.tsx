"use client";

import { useChat } from "@ai-sdk/react";
import { Message } from "@/components/chat/message/Message";
import { Loading } from "@/components/chat/message/Loading";
import { Entry } from "@/components/chat/entry/Entry";

export default function Chat() {
  const data = useChat({
    maxSteps: 50,
  });

  const { messages, status } = data;

  console.log(messages);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch gap-4">
      {messages.map((message, key) => (
        <Message key={key} {...message} />
      ))}
      {status === "submitted" && <Loading />}
      {status !== "submitted" && status !== "streaming" && <Entry {...data} />}
    </div>
  );
}
