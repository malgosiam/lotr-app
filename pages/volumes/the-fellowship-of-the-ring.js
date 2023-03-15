import Link from "next/link";
import Image from "next/image";

import { volumes } from "../../lib/data";

const volumes1 = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function FellowshipOfTheRing() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumes1.title}</h1>
      <p>{volumes1.description}</p>
      <ul>
        {volumes1.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal}- {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={volumes1.cover}
        alt={volumes1.title}
        width={280}
        height={460}
      />
    </>
  );
}
