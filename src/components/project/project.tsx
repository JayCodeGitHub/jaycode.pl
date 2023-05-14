import {
  StyledWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledDescriptionsWrapper,
  StyledType,
  StyledTitle,
  StyledDescription,
  StyledLinksWrapper,
  StyledTechnologiesWrapper,
  StyledTechnology,
} from "./project.styles";
import SocialMediaButton from "../socialMediaButton/socialMediaButton";

export interface ProjectProps {
  order: number;
  image: string;
  alt: string;
  type: string;
  title: string;
  description: string;
  technologies: Array<string>;
  href: string;
  github: string;
}

export default function Project({
  order,
  image,
  alt,
  type,
  title,
  description,
  technologies,
  href,
  github,
}: ProjectProps) {
  return (
    <StyledWrapper>
      <StyledImageWrapper order={order} href={href} target="_blank">
        <StyledImage src={image} width={1500} height={771} alt={alt} />
      </StyledImageWrapper>
      <StyledDescriptionsWrapper order={order}>
        <StyledType>{type}</StyledType>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledTechnologiesWrapper>
          {technologies.map((item, i) => (
            <StyledTechnology key={i}>{item}</StyledTechnology>
          ))}
        </StyledTechnologiesWrapper>
        <StyledLinksWrapper>
          <SocialMediaButton href={github} type="github">
            Source
          </SocialMediaButton>
          <SocialMediaButton href={href} type="website">
            Website
          </SocialMediaButton>
        </StyledLinksWrapper>
      </StyledDescriptionsWrapper>
    </StyledWrapper>
  );
}
