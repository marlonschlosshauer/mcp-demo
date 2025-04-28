"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { usePathname, useRouter } from "next/navigation";
import { purge } from "@/server/purge";

export const PreviewIndicator: React.FC = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const onConfirm = async () => {
    await purge(pathname);
    push(`/api/contentful/draft/off?slug=${pathname}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <Separator />
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="flex flex-row content-start cursor-pointer">
            <Badge>
              <code>Preview is enabled ⚠️</code>
            </Badge>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Exit preview?</AlertDialogTitle>
            <AlertDialogDescription>
              Exiting the preview will stop draft content from being displayed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>Exit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
