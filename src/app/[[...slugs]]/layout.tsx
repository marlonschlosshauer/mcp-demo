import { Provider } from "@/components/web/provider/Provider";
import { draftMode } from "next/headers";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { PreviewIndicator } from "@/components/web/preview/PreviewIndicator";

export default async function ContentfulLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const draft = await draftMode();
  const preview = draft.isEnabled;

  return (
    <Provider preview={preview}>
      <div className="flex flex-col gap-2 py-8 px-8">
        <div className="flex flex-col gap-2 min-h-screen min-w-full items-center">
          <div className="flex flex-col gap-4 max-w-lg w-full">
            {children}
            {preview && <PreviewIndicator />}
          </div>
        </div>
      </div>
    </Provider>
  );
}
