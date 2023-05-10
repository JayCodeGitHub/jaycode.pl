import { StyledWrapper } from "./tiles.styles";
import Tile from "../tile/tile";

export default function Tiles() {
  return (
    <StyledWrapper id="projects">
      <Tile />
      <Tile />
      <Tile />
    </StyledWrapper>
  );
}
