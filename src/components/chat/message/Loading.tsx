import React from "react";
import { TextShimmer } from "@/components/motion/shimmer";
import { Wrapper } from "./Wrapper";

export const Loading: React.FC = () => {
  return (
    <div className="whitespace-pre-wrap">
      <Wrapper isUser={false}>
        <div className="mr-auto w-fit rounded-md px-3 pb-2 text-left font-medium">
          <TextShimmer>Getting answer</TextShimmer>
        </div>
      </Wrapper>
    </div>
  );
};
