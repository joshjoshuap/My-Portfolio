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

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-serif bg-neutral-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
