import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import TopNav from "@/components/ui/nav/top-nav.component";
import Footer from "@/components/ui/footer";
import clsx from "clsx";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "News App",
  description: "All the latest news in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <Theme
          accentColor="tomato"
          appearance="dark"
          radius="small"
          className={clsx("bg-[var(--accent-1)]")}
        >
          <TopNav />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
