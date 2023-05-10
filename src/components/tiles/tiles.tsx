import {
  StyledWrapper,
  StyledOuterWrapper,
  StyledTitle,
  StyledHeader,
} from "./tiles.styles";
import Tile from "../tile/tile";
import { TilesItems } from "@/assets/tilesItems";

export default function Tiles() {
  return (
    <StyledOuterWrapper>
      <StyledHeader>
        <StyledTitle>Some of my projects</StyledTitle>
      </StyledHeader>
      <StyledWrapper id="projects">
        {TilesItems.map(
          ({ href, title, description, buttonHref, color, image }, i) => (
            <Tile
              key={i}
              href={href}
              title={title}
              description={description}
              buttonHref={buttonHref}
              color={color}
              image={image}
            />
          )
        )}
      </StyledWrapper>
    </StyledOuterWrapper>
  );
}
