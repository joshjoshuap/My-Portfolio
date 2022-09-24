import "../styles/main.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Joshua Pautanes | Personal Website </title>

        <meta name="title" content="Joshua Pautanes | Personal Website" />
        <meta
          name="description"
          content="My personal website and portfolio. Know more about me and lets talk"
        />
        <meta name="keywords" content="Joshua Pautanes, Josh Joshua, joshjoshuap" />
        <meta name="author" content="Joshua Pautanes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
