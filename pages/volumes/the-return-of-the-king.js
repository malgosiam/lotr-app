import Link from "next/link";
import { volumes } from "../../lib/data";

const volumes3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

export default function ReturnOfTheKing() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumes3.title}</h1>
      <p>{volumes3.description}</p>
      <ul>
        {volumes3.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}
