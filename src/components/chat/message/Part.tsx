import React from "react";
import { useChat } from "@ai-sdk/react";
import { MessageData } from "./Message";
import { Text } from "./Text";
import { Tool } from "./Tool";

export type PartProps = ReturnType<
  typeof useChat
>["messages"][number]["parts"][number] &
  MessageData;

export const Part: React.FC<PartProps> = (part) => {
  switch (part.type) {
    case "text":
      return <Text {...part} />;

    case "tool-invocation":
      /* @ts-ignore */
      return <Tool {...part} />;
  }
};
