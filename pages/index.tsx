import Head from "next/head";
import type { NextPage } from "next";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Paola's Portfolio</title>
        <meta name="description" content="Portfolio of Paola - Let's build something awesome!" />
      </Head>
      
      <h1 className="p-10 text-red-200">Let’s build an awesome portfolio</h1>
    </div>
  );
}
