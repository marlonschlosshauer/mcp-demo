import { createTransport } from "@smithery/sdk/transport.js";
import { experimental_createMCPClient } from "ai";

export const getUnsplashMcp = async () => {
  const transport = createTransport(
    "https://server.smithery.ai/@hellokaton/unsplash-mcp-server",
    {
      unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
    },
    process.env.SMITHERY_API_KEY ?? "",
  );

  return await experimental_createMCPClient({
    transport,
  });
};
