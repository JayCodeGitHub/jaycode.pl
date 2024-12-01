import { StyledWrapper } from "./projects.styles";
import Project from "../project/project";
import { ProjectsItems } from "@/assets/projectsItems";

export default function Projects() {
  return (
    <StyledWrapper>
      {ProjectsItems.map(
        (
          { image, alt, type, title, description, technologies, href, github },
          i
        ) => (
          <Project
            key={i}
            order={i}
            image={image}
            alt={alt}
            type={type}
            title={title}
            description={description}
            technologies={technologies}
            href={href || ""}
            github={github}
          />
        )
      )}
    </StyledWrapper>
  );
}
