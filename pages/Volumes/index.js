import Link from "next/link";

export default function Volumes() {
  return (
    <section>
      <h1>Volumes</h1>
      <ul>
        <li>
          <Link href="Volumes/the-fellowship-of-the-ring">
            The fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="Volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="Volumes/the-return-of-the-king">
            The return of the King
          </Link>
        </li>
      </ul>
      <Link href="/">back</Link>
    </section>
  );
}
