import Link from "next/link";
import { volumes } from "../../lib/data";

const volumes2 = volumes.find(({ slug }) => slug === "the-two-towers");

export default function TwoTowers() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumes2.title}</h1>
      <p>{volumes2.description}</p>
      <ul>
        {volumes2.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal}- {book.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}
