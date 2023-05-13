import { StyledWrapper } from "./projects.styles";
import Project from "../project/project";

const ProjectsItems = [
  {
    image: `/images/karate-team.jpg`,
    alt: `Screenshot from Karate Team desktop website`,
    type: `commercial`,
    title: `Karate-Team`,
    description: `Still in progress refreshed website of Karate Team Oborniki. Technologies used in the project were selected for the client's needs. So I used Server Site Rendering to speed up loading times. For animation I used GSAP and ScrollTrigger. The data is downloaded from Dato CMS from where the client can manage the content of the site.`,
    technologies: [
      "React",
      "Gatsby",
      "Dato CMS",
      "styled-components",
      "GraphQL",
    ],
    href: "https://karate-team.netlify.app/",
    github: `https://github.com/JayCodeGitHub/karate-team.pl`,
  },
  {
    image: ``,
    alt: ``,
    type: ``,
    title: ``,
    description: ``,
    technologies: [],
    href: "",
    github: ``,
  },
  {
    image: ``,
    alt: ``,
    type: ``,
    title: ``,
    description: ``,
    technologies: [],
    href: "",
    github: ``,
  },
];

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
            href={href}
            github={github}
          />
        )
      )}
    </StyledWrapper>
  );
}
