import { Badge } from "@/components/ui/badge";
import React, { PropsWithChildren } from "react";
import { MessageData } from "./Message";

export type WrapperProps = MessageData;

export const Wrapper: React.FC<PropsWithChildren<WrapperProps>> = ({
  isUser,
  children,
}) => {
  return (
    <div className="whitespace-pre-wrap">
      {isUser ? (
        <Badge variant="default">You</Badge>
      ) : (
        <Badge variant="secondary">AI</Badge>
      )}
      <div className="flex flex-col gap-2 pt-2">{children}</div>
    </div>
  );
};
