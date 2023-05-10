import { useState } from "react";
import {
  StyledWrapper,
  StyledTile,
  StyledLink,
  StyledTitle,
  StyledDescription,
  StyledGradient,
  StyledTileContent,
  StyledBackgroundImage,
} from "./tiles.styles";
import Button from "../button/button.styles";

export default function Tiles() {
  const [hover, setHover] = useState(false);
  return (
    <StyledWrapper id="projects">
      <StyledTile>
        <StyledLink
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
        <StyledTileContent>
          <StyledTitle>Karate Team Oborniki</StyledTitle>
          <StyledDescription>Description</StyledDescription>
          <Button>See More</Button>
        </StyledTileContent>
        <StyledGradient color="red" />
        <StyledBackgroundImage
          hover={hover}
          src="/images/profile.webp"
          width={500}
          height={643}
          alt="Project image"
        />
      </StyledTile>
      <StyledTile>
        <StyledTileContent>
          <StyledTitle>Happy Notes</StyledTitle>
          <StyledDescription>Description</StyledDescription>
          <Button>See More</Button>
        </StyledTileContent>
        <StyledGradient color="green" />
        <StyledBackgroundImage
          hover={hover}
          src="/images/profile.webp"
          width={500}
          height={643}
          alt="Project image"
        />
      </StyledTile>
      <StyledTile>
        <StyledTileContent>
          <StyledTitle>Clothify</StyledTitle>
          <StyledDescription>Description</StyledDescription>
          <Button>See More</Button>
        </StyledTileContent>
        <StyledGradient color="pink" />
        <StyledBackgroundImage
          hover={hover}
          src="/images/profile.webp"
          width={500}
          height={643}
          alt="Project image"
        />
      </StyledTile>
    </StyledWrapper>
  );
}
