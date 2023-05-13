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

export default function Project() {
  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <StyledImage
          src={"/images/karate.webp"}
          width={1590}
          height={1000}
          alt="Project image"
        />
      </StyledImageWrapper>
      <StyledDescriptionsWrapper>
        <StyledType>Commercial</StyledType>
        <StyledTitle>Karate</StyledTitle>
        <StyledDescription>Description</StyledDescription>
        <StyledTechnologiesWrapper>
          <StyledTechnology>React</StyledTechnology>
          <StyledTechnology>Next.js</StyledTechnology>
        </StyledTechnologiesWrapper>
      </StyledDescriptionsWrapper>
    </StyledWrapper>
  );
}
