import React from "react";
import { Block, BlockProps } from "../block/Block";
import { Header, HeaderProps } from "../header/Header";

export interface PageProps {
  header?: HeaderProps;
  blocks?: BlockProps[];
}

export const Page: React.FC<PageProps> = ({ header, blocks }) => {
  return (
    <div className="flex flex-col gap-2 min-h-screen">
      {header && <Header {...header} />}
      <div className="flex flex-col gap-4">
        {blocks?.map((block, key) => <Block key={key} {...block} />)}
      </div>
    </div>
  );
};
