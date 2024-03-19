import { volumes } from "../../lib/data";
import Nav from "@/components/Nav";
import VolumeDetail from "@/components/VolumeDetail";
import Head from "next/head";
import { useRouter } from "next/router";

export default function TheFellowshipOfTheRing() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  if (!volume) {
    return (
      <div>
        <p>Volume not found.</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Lord of the Rings - {volume.title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <VolumeDetail volume={volume} />
      <Nav currIndex={volumeIndex} pages={volumes} />
    </>
  );
}
