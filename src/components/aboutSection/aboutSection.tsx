import {
  StyledOuterWrapper,
  StyledWrapper,
  StyledDescriptionsWrapper,
  StyledTitle,
  StyledDescription,
  StyledLinksWrapper,
  StyledTechnologiesWrapper,
  StyledTechnology,
  StyledImage,
} from "./aboutSection.styles";
import { AboutSectionItems } from "@/assets/aboutSectionItems";
import SocialMediaButton from "../socialMediaButton/socialMediaButton";

export default function AboutSection() {
  const { title, description, technologies, image } = AboutSectionItems;
  return (
    <StyledOuterWrapper>
      <StyledWrapper>
        <StyledDescriptionsWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <StyledLinksWrapper>
            <SocialMediaButton
              href="https://github.com/JayCodeGitHub"
              type="github"
            >
              GitHub
            </SocialMediaButton>
            <SocialMediaButton
              href="https://www.linkedin.com/in/jakub-gryzi%C5%84ski-b00296264/"
              type="linkedin"
            >
              LinkedIn
            </SocialMediaButton>
          </StyledLinksWrapper>
          <StyledTechnologiesWrapper>
            <h3>Tech Stack</h3>
            {technologies.map(({ image, alt }) => (
              <li key="alt">
                <StyledTechnology src={image} alt={alt} />
              </li>
            ))}
          </StyledTechnologiesWrapper>
        </StyledDescriptionsWrapper>
        <StyledImage
          src={image}
          width={777}
          height={1000}
          alt="Profile image"
        />
      </StyledWrapper>
    </StyledOuterWrapper>
  );
}
