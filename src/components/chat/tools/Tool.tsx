import React from "react";
import { GetEntry } from "@/components/chat/tools/contentful/GetEntry";
import { GetContentType } from "@/components/chat/tools/contentful/GetContentType";
import { ListContentTypes } from "@/components/chat/tools/contentful/ListContentTypes";
import { SearchEntries } from "@/components/chat/tools/contentful/SearchEntries";

import { PreviewPage } from "@/components/chat/tools/custom/PreviewPage";
import { PreviewBlock } from "@/components/chat/tools/custom/PreviewBlock";

export interface ToolProps {
  name: string;
  data: any;
}

export const Tool: React.FC<ToolProps> = ({ name, data }) => {
  switch (name) {
    case "get_content_type": {
      return <GetContentType {...data} />;
    }
    case "list_content_types": {
      return <ListContentTypes {...data} />;
    }
    case "get_entry":
    case "update_entry":
    case "create_entry": {
      return <GetEntry {...data} />;
    }
    case "search_entries": {
      return <SearchEntries {...data} />;
    }
    case "preview_page": {
      return <PreviewPage {...data} />;
    }
    case "preview_block": {
      return <PreviewBlock {...data} />;
    }
  }
};
