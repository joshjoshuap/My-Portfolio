import "../styles/main.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Joshua Pautanes | Portfolio </title>

        <meta name="title" content="Joshua Pautanes | Portfolio" />
        <meta
          name="description"
          content="My personal website and portfolio"
        />
        <meta
          name="keywords"
          content="Joshua Pautanes, Josh Joshua"
        />
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