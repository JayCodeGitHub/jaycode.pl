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
  source: string;
  color: string;
  image: string;
}

export default function Tile({
  href,
  title,
  description,
  source,
  color,
  image,
}: TileProps) {
  const [isActive, setIsActive] = useState("false");
  console.log(source);
  return (
    <StyledWrapper>
      <StyledLink
        href={href}
        target="_blank"
        aria-label="Link to project website"
        onMouseEnter={() => setIsActive("true")}
        onMouseLeave={() => setIsActive("false")}
      />
      <StyledTileContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <a href={source} target="_blank">
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
