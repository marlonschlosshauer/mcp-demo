export interface ToolInvocation<Args = any, Result = any> {
  type: "tool-invocation";
  toolInvocation: {
    state: "result";
    step: number;
    toolCallId: string;
    toolName: string;
    args: Args;
    result: Result;
  };
}
