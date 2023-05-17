import {
  StyledWrapper,
  StyledOuterWrapper,
  StyledTitle,
  StyledHeader,
} from "./tiles.styles";
import Tile from "../tile/tile";
import { TilesItems } from "@/assets/tilesItems";
import ArrowButton from "../arrowButton/arrowButton";

export default function Tiles() {
  return (
    <StyledOuterWrapper id="projects">
      <StyledHeader>
        <StyledTitle>Some of my projects</StyledTitle>
        <ArrowButton to="/experience" />
      </StyledHeader>
      <StyledWrapper>
        {TilesItems.map(
          ({ href, title, description, source, color, image }, i) => (
            <Tile
              key={i}
              href={href}
              title={title}
              description={description}
              source={source}
              color={color}
              image={image}
            />
          )
        )}
      </StyledWrapper>
    </StyledOuterWrapper>
  );
}
