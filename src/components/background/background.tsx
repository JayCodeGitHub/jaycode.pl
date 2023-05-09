import Particles from "../particles/particles";
import { StyledBackgroundWrapper, StyledBacground } from "./background.styles";

export default function Background() {
  return (
    <StyledBackgroundWrapper>
      <Particles />
      <StyledBacground />
    </StyledBackgroundWrapper>
  );
}
