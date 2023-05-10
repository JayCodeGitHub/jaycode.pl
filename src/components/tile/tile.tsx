import { useState } from "react";
import {
  StyledWrapper,
  StyledLink,
  StyledTileContent,
  StyledTitle,
  StyledDescription,
  StyledGradient,
  StyledBackgroundImage,
} from "./tile.styles";
import Button from "../button/button.styles";

export default function Tile() {
  const [hover, setHover] = useState(false);
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
}
