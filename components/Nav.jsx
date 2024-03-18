import Link from "next/link";

export default function Nav({ currIndex, pages }) {
  return (
    <nav>
      {currIndex > 0 ? (
        <Link href={pages[currIndex - 1].slug}>Previous</Link>
      ) : (
        <a className="disabled-link">Previous</a>
      )}
      {currIndex < pages.length - 1 ? (
        <Link href={pages[currIndex + 1].slug}>Next</Link>
      ) : (
        <a className="disabled-link">Next</a>
      )}
    </nav>
  );
}
