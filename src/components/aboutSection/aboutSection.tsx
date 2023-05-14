import {
  StyledOuterWrapper,
  StyledWrapper,
  StyledDescriptionsWrapper,
  StyledTitle,
  StyledDescription,
  StyledLinksWrapper,
  StyledTechnologiesWrapper,
  StyledTechnology,
  StyledImageWrapper,
  StyledImage,
} from "./aboutSection.styles";
import { AboutSectionItems } from "@/assets/aboutSectionItems";

export default function AboutSection() {
  const { title, description, technologies, image } = AboutSectionItems;
  return (
    <StyledOuterWrapper>
      <StyledWrapper>
        <StyledDescriptionsWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <StyledLinksWrapper>Linked In, GitHub</StyledLinksWrapper>
          <StyledTechnologiesWrapper>
            <h3>Tech Stack</h3>
            {technologies.map(({ image, alt }) => (
              <li key="alt">
                <StyledTechnology src={image} alt={alt} />
              </li>
            ))}
          </StyledTechnologiesWrapper>
        </StyledDescriptionsWrapper>
        <StyledImageWrapper>
          <StyledImage
            src={image}
            loading="eager"
            width={500}
            height={643}
            alt="Profile image"
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </StyledOuterWrapper>
  );
}
