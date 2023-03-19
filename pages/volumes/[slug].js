import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

import StyledFigure from "../../components/StyledFigure";
import StyledLink from "../../components/StyledLink";
import StyledHeadline from "../../components/StyledHeadline";
import StyledInfo from "../../components/StyledInfo";
import StyledSection from "../../components/StyledSection";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumesSlug = volumes.find((volume) => volume.slug === slug);

  if (!volumesSlug) {
    return null;
  }
  return (
    <StyledSection>
      <StyledInfo>
        <StyledLink href="/volumes">← All Volumes</StyledLink>
        <StyledHeadline>{volumesSlug.title}</StyledHeadline>
        <p>{volumesSlug.description}</p>
      </StyledInfo>

      <StyledFigure color={volumesSlug.color}>
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
      </StyledFigure>
    </StyledSection>
  );
}
