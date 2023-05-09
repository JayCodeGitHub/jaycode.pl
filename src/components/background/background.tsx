import Particles from "../particles/particles";
import { BackgroundWrapper, StyledBacground } from "./background.styles";

export default function Background() {
  return (
    <BackgroundWrapper>
      <Particles />
      <StyledBacground />
    </BackgroundWrapper>
  );
}
