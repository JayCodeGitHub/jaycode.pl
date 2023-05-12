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
  const [isActive, setIsActive] = useState("false");
  return (
    <StyledWrapper>
      <StyledLink
        href={href}
        aria-label="Link to project website"
        onMouseEnter={() => setIsActive("true")}
        onMouseLeave={() => setIsActive("false")}
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
        src={image}
        width={1590}
        height={1000}
        alt="Project image"
        isactive={isActive}
      />
    </StyledWrapper>
  );
}
