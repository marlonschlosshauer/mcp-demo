"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { SidebarIcon } from "@/icons/Sidebar";
import { Models, MODELS } from "@/lib/models";
import { useOptions } from "@/lib/options";
import React from "react";

export const Header: React.FC = () => {
  const { setState, ...rest } = useOptions();
  const { model, yap } = rest;

  return (
    <Sheet>
      <div className="absolute top-0 left-0 w-full flex flex-row-reverse  items-center p-4">
        <SheetTrigger>
          <SidebarIcon className="w-[24px] h-[24px] fill-gray-900 hover:fill-gray-400 transition" />
        </SheetTrigger>
      </div>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4">Options</SheetTitle>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2 w-full">
              <label
                htmlFor="model"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Select model
              </label>
              <Select
                onValueChange={(value) =>
                  setState({ ...rest, model: value as Models })
                }
                defaultValue={model}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Model" defaultValue={model} />
                </SelectTrigger>
                <SelectContent>
                  {MODELS.map((model, key) => (
                    <SelectItem key={key} value={model}>
                      {model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label
                htmlFor="model"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Allow LLM to yap
              </label>
              <Select
                onValueChange={(value) =>
                  setState({ ...rest, yap: value === "false" ? false : true })
                }
                defaultValue={yap ? "true" : "false"}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Don't yap" defaultValue="false" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yap</SelectItem>
                  <SelectItem value="false">{"Don't yap"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
