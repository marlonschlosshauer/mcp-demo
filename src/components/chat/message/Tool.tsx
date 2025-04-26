import { ToolInvocation } from "@/types/mcp";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { normalizeToolData } from "@/lib/message";
import { Tool as Base } from "@/components/chat/tools/Tool";

export type ToolProps = ToolInvocation;

export const Tool: React.FC<ToolProps> = (props) => {
  const data = normalizeToolData(props);

  if (!data) {
    return;
  }

  return (
    <div className="flex flex-col gap-2">
      <Dialog>
        <DialogTrigger className="cursor-pointer">
          <p className="font-normal text-xs">
            <span className="font-sans text-gray-500">Tool call: </span>
            <span className="font-mono underline text-gray-900">
              {props.toolInvocation.toolName}()
            </span>
          </p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tool call details</DialogTitle>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row flex-wrap gap-1">
                <Badge variant="outline">
                  tool:{" "}
                  {props.toolInvocation.toolName
                    .replaceAll("_", " ")
                    .toLocaleUpperCase()}
                </Badge>
                <Badge variant="outline">
                  id: {props.toolInvocation.toolCallId}
                </Badge>
                <Badge variant="outline">
                  step: {props.toolInvocation.step}
                </Badge>
                {Object.entries(props.toolInvocation.args).map(
                  ([x, y], key) => (
                    <Badge key={key}>
                      {x}: {JSON.stringify(y)}
                    </Badge>
                  ),
                )}
              </div>
              <div className="overflow-auto">
                <pre className="overflow-auto w-sm">
                  {JSON.stringify(props.toolInvocation, null, 2)}
                </pre>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Base name={props.toolInvocation.toolName} data={data} />
    </div>
  );
};
