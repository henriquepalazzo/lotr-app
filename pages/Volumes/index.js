import Link from "next/link";
import Head from "next/head";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { Fragment } from "react";

export default function Volumes() {
  return (
    <>
      <Head>
        <title>Lord of the Rings - Volumes</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <section>
        <h1>The Lord of The Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
          {volumes.map((volume, index) => {
            return (
              <li key={index}>
                <Link href={`Volumes/${volume.slug}`}>{volume.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
