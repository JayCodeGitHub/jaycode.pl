import {
  StyledWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledDescriptionsWrapper,
  StyledType,
  StyledTitle,
  StyledDescription,
  StyledTechnologiesWrapper,
  StyledTechnology,
} from "./project.styles";

export interface ProjectProps {
  i: number;
}

export default function Project({ i }: ProjectProps) {
  return (
    <StyledWrapper>
      <StyledImageWrapper order={i}>
        <StyledImage
          src={"/images/karate-team.jpg"}
          width={1500}
          height={771}
          alt="Project image"
        />
      </StyledImageWrapper>
      <StyledDescriptionsWrapper order={i}>
        <StyledType>Commercial</StyledType>
        <StyledTitle>Karate</StyledTitle>
        <StyledDescription>
          Still in progress refreshed website of Karate Team Oborniki.
          Technologies used in the project were selected for the clients needs.
          So I used Server Site Rendering to speed up loading times. For
          animation I used GSAP and ScrollTrigger. The data is downloaded from
          Dato CMS from where the client can manage the content of the site.
        </StyledDescription>
        <StyledTechnologiesWrapper>
          <StyledTechnology>React</StyledTechnology>
          <StyledTechnology>Next.js</StyledTechnology>
        </StyledTechnologiesWrapper>
      </StyledDescriptionsWrapper>
    </StyledWrapper>
  );
}
