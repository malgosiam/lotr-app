import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  const router = useRouter();
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={title}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
