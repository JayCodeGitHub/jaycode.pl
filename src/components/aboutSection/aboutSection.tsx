import {
  StyledOuterWrapper,
  StyledWrapper,
  StyledDescriptionsWrapper,
  StyledTitle,
  StyledDescription,
  StyledTechnologiesWrapper,
  StyledTechnology,
  StyledImage,
} from "./aboutSection.styles";

export default function AboutSection() {
  return (
    <StyledOuterWrapper>
      <StyledWrapper>
        <StyledDescriptionsWrapper>
          <StyledTitle>Hello!!! My name is Jakub</StyledTitle>
          <StyledDescription>
            I like to create things that live on the internet. For several years
            I have been developing my skills in HTML, CSS, and JavaScript. I
            will be a good member of the team because I learn quickly and work
            well in a team.
          </StyledDescription>
          <StyledTechnologiesWrapper>
            <StyledTechnology>React</StyledTechnology>
          </StyledTechnologiesWrapper>
        </StyledDescriptionsWrapper>
        <StyledImage
          src="/images/profile.webp"
          loading="eager"
          width={500}
          height={643}
          alt="Profile image"
        />
      </StyledWrapper>
    </StyledOuterWrapper>
  );
}
