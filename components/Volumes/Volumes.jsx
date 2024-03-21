import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import "./Volumes.module.css";

const StyledHeader = styled.h2`
  margin: 2rem 0 1rem;
`;
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;
const StyledLi = styled.li`
  flex: 1;
`;
const StyledLink = styled(Link)`
  font-size: 0.8rem;
  text-decoration: none;
  color: #333;
`;

export default function AllVolumes({ volumes }) {
  return (
    <>
      <StyledHeader>All Volumes</StyledHeader>
      <StyledUl>
        {volumes.map((volume, index) => {
          return (
            <StyledLi key={index}>
              <StyledLink href={`Volumes/${volume.slug}`}>
                <Image
                  src={volume.cover}
                  alt={volume.title}
                  width={100}
                  height={100}
                  layout={"responsive"}
                />
                {volume.title}
              </StyledLink>
            </StyledLi>
          );
        })}
      </StyledUl>
    </>
  );
}
