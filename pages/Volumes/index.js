import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";

export default function Volumes() {
  return (
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
  );
}
