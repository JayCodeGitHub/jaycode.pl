import { StyledWrapper } from "./hero.styles";
import Button from "../button/button.styles";

export default function Hero() {
  return (
    <StyledWrapper>
      <h1>Hero</h1>
      <a href="#projects">
        <Button>See More</Button>
      </a>
    </StyledWrapper>
  );
}
