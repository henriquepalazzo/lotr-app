import Link from "next/link";
import Head from "next/head";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function handleRandonGeneratorClick() {
    const randonSlug = volumes[Math.floor(Math.random() * volumes.length)].slug;
    router.push("Volumes/" + randonSlug);
  }
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
        <button onClick={handleRandonGeneratorClick}>
          Go to randon volume
        </button>
      </section>
    </>
  );
}
