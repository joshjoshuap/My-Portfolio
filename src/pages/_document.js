import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
    >
      <Head>
        {/* Favicon */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        ></link>
      </Head>
      <body className="font-serif bg-neutral-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
