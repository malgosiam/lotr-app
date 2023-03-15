import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumesSlug = volumes.find((volume) => volume.slug === slug);

  if (!VolumeDetail) {
    return null;
  }
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumesSlug.title}</h1>
      <p>{volumesSlug.description}</p>
      <ul>
        {volumesSlug.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={volumesSlug.cover}
        alt={volumesSlug.title}
        width={280}
        height={460}
      />
    </>
  );

  const { title, description } = VolumeDetail;
}
