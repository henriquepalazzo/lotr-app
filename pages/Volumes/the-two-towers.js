import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import Nav from "@/components/Nav";

export default function TheTwoTowers() {
  const volumeIndex = volumes.findIndex(
    (volume) => volume.slug === "the-two-towers"
  );
  const volume = volumes[volumeIndex];

  return (
    <>
      <article>
        <h1>{volume.title}</h1>
        <p>{volume.description}</p>
        <ul>
          {volume.books.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
        <Image src={volume.cover} width={140} height={230} alt={volume.title} />
        <div>
          <Link href="/Volumes">← All Volumes</Link>
        </div>
      </article>
      <Nav currIndex={volumeIndex} pages={volumes} />
    </>
  );
}
