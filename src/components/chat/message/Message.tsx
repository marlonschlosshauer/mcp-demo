import React from "react";
import { Part } from "./Part";
import { Wrapper } from "./Wrapper";
import { useChat } from "@ai-sdk/react";

export interface MessageData {
  isUser: boolean;
}

export type MessageProps = ReturnType<typeof useChat>["messages"][number];

export const Message: React.FC<MessageProps> = (props) => {
  const { parts, id, role } = props;

  const isUser = role === "user";

  return (
    <div className="whitespace-pre-wrap">
      <Wrapper {...props} isUser={isUser}>
        {parts.map((part, key) => (
          <Part key={`${id}-${key}`} {...props} {...part} isUser={isUser} />
        ))}
      </Wrapper>
    </div>
  );
};
