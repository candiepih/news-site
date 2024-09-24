import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import TopNav from "@/components/ui/nav/top-nav.component";
import Footer from "@/components/ui/footer";
import clsx from "clsx";
import dynamic from "next/dynamic";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const OpenGraphTags = dynamic(
  () => import("@/components/html_base_tags/open-graph-tags.component")
);

export const metadata: Metadata = {
  title: "News App",
  description: "All the latest, trending news in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* header colors */}
        <meta name="msapplication-TileColor" content="#211b11" />
        <meta name="theme-color" content="#211b11"></meta>

        {/* open graph meta tags */}
        <OpenGraphTags
          title="News App"
          description="All the latest, trending news in one place."
          imageUrl="https://news.alexnjagi.com/favicons/news-site.png"
          websiteUrl={"https://news.alexnjagi.com"}
        />

        {/* favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
      </head>
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
