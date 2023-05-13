import { StyledWrapper } from "./projects.styles";
import Project from "../project/project";

export default function Projects() {
  return (
    <StyledWrapper>
      <Project i={0} />
      <Project i={1} />
      <Project i={2} />
    </StyledWrapper>
  );
}
