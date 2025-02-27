import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfi = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="false"
        className={`${outfi.className} bg-[#fdfdfd] scroll-smooth w-full overflow-auto min-h-screen antialiased box`}
      >
        {children}
      </body>
    </html>
  );
}
