import { Header } from "@/components/chat/header/Header";
import { OptionProvider } from "@/lib/options";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OptionProvider>
      <Header />
      {children}
    </OptionProvider>
  );
}
