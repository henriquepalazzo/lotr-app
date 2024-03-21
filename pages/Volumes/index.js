import Link from "next/link";
import Head from "next/head";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import AllVolumes from "@/components/Volumes/Volumes";
import styled from "styled-components";

const StyledHeader1 = styled.h1`
  font-size: 2.8rem;
  line-height: 3.4rem;
  margin-bottom: 1.5rem;
`;

const StyledButton = styled.button`
  width: 100%;
  margin: 3rem 0 0;
  padding: 1rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export default function Volumes() {
  const router = useRouter();
  function handleRandonGeneratorClick() {
    const randonSlug = volumes[Math.floor(Math.random() * volumes.length)].slug;
    router.push("Volumes/" + randonSlug);
  }
  return (
    <>
      <Head>
        <title>Lord of the Rings - Volumes</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <section>
        <StyledHeader1>The Lord of The Rings</StyledHeader1>
        <p>{introduction}</p>
        <AllVolumes volumes={volumes} />
        <StyledButton onClick={handleRandonGeneratorClick}>
          Go to randon volume
        </StyledButton>
      </section>
    </>
  );
}
