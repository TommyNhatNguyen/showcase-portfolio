import type { Metadata } from "next";
import "./scss/index.scss";
import MainLayout from "./layout/MainLayout";

export const metadata: Metadata = {
  title: "TOMMY NGUYEN 🧑🏻‍🎨 Visual Developer",
  description: "My personal digital garden for my projects and thoughts 🌱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TOMMY NGUYEN 🧑🏻‍🎨 Visual Developer</title>
        <link
          rel="preload"
          href="/fonts/InterTight-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/InterTight-Bold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/InterTight-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/InterTight-Medium.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/InterTight-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/InterTight-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/InterTight-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/InterTight-SemiBold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <style>
          {`
              html {
  font-size: 62.5%;
  width: 100%;
  height: 100%;
  margin: auto;
  line-height: normal;
  scroll-behavior: smooth;
}

body {
  font-family: var(--ff-regular);
  font-size: var(--fs-body);
  color: var(--primary-text-color);
  margin: auto;
  width: 100%;
  height: 100%;
}
            `}
        </style>
      </head>
      <body className={`--loading`}>
        <div id="smooth-wrapper">
          <MainLayout>{children}</MainLayout>
        </div>
      </body>
    </html>
  );
}
