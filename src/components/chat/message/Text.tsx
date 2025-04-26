import { useOptions } from "@/lib/options";
import React from "react";
import { MessageData } from "./Message";
import { Markdown } from "@/components/shared/markdown/Markdown";

export interface TextProps extends MessageData {
  text: string;
}

export const Text: React.FC<TextProps> = ({ isUser, ...props }) => {
  const { yap } = useOptions();

  if (!yap && !isUser) {
    return;
  }

  return (
    <div className="mr-auto w-fit rounded-md px-3 pb-2 text-left font-medium">
      <Markdown {...props} />
    </div>
  );
};
