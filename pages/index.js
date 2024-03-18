import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div>
        <Link href="/Volumes">Volumes</Link>
      </div>
    </>
  );
}
