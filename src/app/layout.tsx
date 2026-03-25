import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";

const notoSansSc = Noto_Sans_SC({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "钟利娜 · 个人网站",
  description: "钟利娜的个人主页与作品展示",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSc.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
