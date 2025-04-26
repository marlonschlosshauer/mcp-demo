import { ToolInvocation } from "@/types/mcp";

export const normalizeToolSmitheryData = (data: ToolInvocation) => {
  const text = data?.toolInvocation?.result?.content?.[0]?.text;

  if (!text) {
    return;
  }

  if (typeof text === "object") {
    return text;
  }

  try {
    const props = JSON.parse(text);

    if (!props) {
      return;
    }

    return props;
  } catch {
    return;
  }
};

export const normalizeToolCustomData = (data: ToolInvocation) => {
  return data?.toolInvocation?.result;
};

export const normalizeToolData = (data: ToolInvocation) => {
  if (!data) {
    return;
  }

  switch (data.toolInvocation.toolName) {
    case "get_content_type":
    case "list_content_types":
    case "get_entry":
    case "update_entry":
    case "create_entry":
    case "search_entries":
    case "search_photos":
      return normalizeToolSmitheryData(data);
    case "preview_page":
    case "preview_block":
      return normalizeToolCustomData(data);
  }
};
