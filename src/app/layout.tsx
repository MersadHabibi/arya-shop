import type { Metadata } from "next";
import "@/css/tailwind.css";
import "@/css/fontiran.css";
import siteConfig from "@/config/site";
import Providers from "@/components/providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: "آریا | %s",
    default: "آریا",
  },
  description: "Generated by create next app",
  icons: {
    icon: siteConfig.mianIcon,
    href: siteConfig.mianIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" data-theme="light" className="h-fit">
      <body className="ss02 h-full overflow-y-scroll text-sm text-base-content">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
