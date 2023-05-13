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
    href: `https://karate-team.netlify.app/`,
    github: `https://github.com/JayCodeGitHub/karate-team.pl`,
  },
  {
    image: `/images/happy-notes.jpg`,
    alt: `Screenshot from Happy Notes desktop website`,
    type: `Non-commercial`,
    title: `Happy-Notes`,
    description: `Happy Notes 2.0 is base on Next.js new version of application for creating notes in three different categories. The application has a login system, each user has their own notes. The notes are stored in a database and are uploaded via rest api. I decided to use:`,
    technologies: [
      "Next JS",
      "React",
      "Redux",
      "tailwind css",
      "TypeScript",
      "Mongo DB",
      "JWT",
      "Framer Motion",
    ],
    href: `https://happy-notes.pl/`,
    github: `https://github.com/JayCodeGitHub/Happy-Notes-2.0`,
  },
  {
    image: `/images/clothify.jpg`,
    alt: `Screenshot from Clothify desktop website`,
    type: `Non-commercial`,
    title: `Clothify`,
    description: `Clothify is a clothing store project created for my developer portfolio. The main goal of this project was to understand how to manage application state in React at an advanced level.`,
    technologies: [
      "Next JS",
      "React",
      "TypeScript",
      "Framer Motion",
      "styled-components",
    ],
    href: `https://clothify-app.vercel.app/`,
    github: `https://github.com/JayCodeGitHub/Clothify`,
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
