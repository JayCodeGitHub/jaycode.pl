import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JayCode</title>
        <meta
          name="description"
          content="Hello!!! My name is Jakub I like to create things that live on the internet. 
          For several years I have been developing my skills in HTML, CSS, and JavaScript. 
          I will be a good member of the team because I learn quickly and work well in a team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
