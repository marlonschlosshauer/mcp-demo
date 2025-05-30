import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import { Models } from "./models";

export const getSDK = (model: Models) => {
  switch (model) {
    case "Claude 3.7":
      return anthropic("claude-3-7-sonnet-20250219");
    case "Claude 3.5":
      return anthropic("claude-3-5-sonnet-20241022");
    case "gpt-4o":
      return openai("gpt-4o", {
        parallelToolCalls: true,
      });
    case "gpt-4o-mini":
      return openai("gpt-4o-mini", {
        parallelToolCalls: true,
      });
    default:
      return openai("gpt-4.1-mini", {
        parallelToolCalls: true,
      });
  }
};
