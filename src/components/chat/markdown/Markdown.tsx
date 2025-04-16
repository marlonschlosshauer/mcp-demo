import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface MarkdownProps {
  text: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ text }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      ol: ({ children }) => <ol className="flex flex-col gap-4">{children}</ol>,
      li: ({ children }) => <li className="flex flex-col gap-4">{children}</li>,
    }}
  >
    {text}
  </ReactMarkdown>
);
