import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nextjs is awesome</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
