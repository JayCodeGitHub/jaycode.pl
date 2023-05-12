import { useState } from "react";
import {
  StyledWrapper,
  StyledLink,
  StyledButton,
  StyledTileContent,
  StyledTitle,
  StyledDescription,
  StyledGradient,
  StyledBackgroundImage,
} from "./tile.styles";

interface TileProps {
  href: string;
  title: string;
  description: string;
  buttonHref: string;
  color: string;
  image: string;
}

export default function Tile({
  href,
  title,
  description,
  buttonHref,
  color,
  image,
}: TileProps) {
  const [hover, setHover] = useState(false);
  return (
    <StyledWrapper>
      <StyledLink
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        href={href}
        aria-label="Link to project website"
      />
      <StyledTileContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <a href={buttonHref}>
          <StyledButton>Source</StyledButton>
        </a>
      </StyledTileContent>
      <StyledGradient color={color} />
      <StyledBackgroundImage
        hover={hover}
        src={image}
        width={1590}
        height={1000}
        alt="Project image"
      />
    </StyledWrapper>
  );
}
