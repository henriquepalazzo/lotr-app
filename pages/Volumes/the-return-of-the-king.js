import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function TheReturnOfTheKing() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );
  return (
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
  );
}
