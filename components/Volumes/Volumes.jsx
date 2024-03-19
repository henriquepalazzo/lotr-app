import Link from "next/link";
import "./Volumes.module.css";

export default function AllVolumes({ volumes }) {
  return (
    <>
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
    </>
  );
}
