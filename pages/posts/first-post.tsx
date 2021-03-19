import Link from "next/link";
import Head from "next/head";
import Layout from '../../components/layout'
import Navbar from '../../components/Navbar/navbar'
import 'bootswatch/dist/pulse/bootstrap.min.css'

export default function FirstPost() {
  return (
    <>
      <Navbar></Navbar>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
