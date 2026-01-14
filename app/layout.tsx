import type { Metadata } from "next";
import "@/css/globals.css";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Qore AI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head></head>
      <body
        className={` antialiased p-8  max-sm:px-4 min-[1440px]:p-[10vw]`}
      >
        {children}
      </body>
    </html>
  );
}
