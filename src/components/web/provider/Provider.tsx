"use client";

import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { PropsWithChildren } from "react";

export interface ProviderProps {
  preview?: boolean;
}

export const Provider: React.FC<PropsWithChildren<ProviderProps>> = ({
  preview,
  children,
}) => {
  return (
    <ContentfulLivePreviewProvider locale="en-US" enableLiveUpdates={preview}>
      {children}
    </ContentfulLivePreviewProvider>
  );
};
