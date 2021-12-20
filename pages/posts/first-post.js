import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Dragon</title>
      </Head>
      <h1>Dragon</h1>
      Dragon is responsible for deployment of this site.
    </Layout>
  );
}
