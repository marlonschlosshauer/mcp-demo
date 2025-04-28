import { useOptions } from "@/lib/options";
import { useChat } from "@ai-sdk/react";
import React from "react";
import { Wrapper } from "../message/Wrapper";

export type EntryProps = ReturnType<typeof useChat>;

export const Entry: React.FC<EntryProps> = ({
  input,
  handleSubmit,
  handleInputChange,
  status,
}) => {
  const { model } = useOptions();

  return (
    <div className="whitespace-pre-wrap">
      <Wrapper isUser={true}>
        <form onSubmit={(e) => handleSubmit(e, { body: { model } })}>
          <textarea
            autoFocus
            disabled={status === "submitted" || status === "streaming"}
            className="w-full outline-none resize-none px-3"
            value={input}
            placeholder="Say something..."
            onKeyDown={(e) => e.code === "Enter" && handleSubmit(e)}
            onChange={handleInputChange}
            /* @ts-ignore */
            style={{ fieldSizing: "content" }}
          />
        </form>
      </Wrapper>
    </div>
  );
};
