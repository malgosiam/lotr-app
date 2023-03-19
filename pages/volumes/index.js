import { useRouter } from "next/router";
import { introduction, volumes } from "../../lib/data";
import StyledButton from "../../components/StyledButton";
import StyledCaption from "../../components/StyledCaption";
import StyledImage from "../../components/StyledImage";
import StyledInfo from "../../components/StyledInfo";
import StyledLink from "../../components/StyledLink";
import StyledVolumes from "../../components/StyledVolumes";
import StyledHeadline from "../../components/StyledHeadline";
import StyledSection from "../../components/StyledSection";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();

  const randomVolume = getRandomElement(volumes);

  return (
    <StyledSection>
      <StyledInfo>
        <StyledHeadline>Lord of the Rings</StyledHeadline>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <StyledVolumes>
          {volumes.map(({ slug, title, cover }) => {
            return (
              <li key={title}>
                <StyledLink href={`/volumes/${slug}`}>
                  <StyledImage
                    src={cover}
                    alt={title}
                    width={120}
                    height={200}
                  />
                  <StyledCaption>{title}</StyledCaption>
                </StyledLink>
              </li>
            );
          })}
        </StyledVolumes>
        <StyledButton
          type="button"
          onClick={() => router.push("/volumes/" + randomVolume.slug)}
        >
          Random Volume
        </StyledButton>
      </StyledInfo>
    </StyledSection>
  );
}
