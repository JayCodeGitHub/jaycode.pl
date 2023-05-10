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
      <a
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        href={href}
      />
      <StyledTileContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <Button>See More</Button>
      </StyledTileContent>
      <StyledGradient color={color} />
      <StyledBackgroundImage
        hover={hover}
        src={image}
        width={500}
        height={643}
        alt="Project image"
      />
    </StyledWrapper>
  );
}
