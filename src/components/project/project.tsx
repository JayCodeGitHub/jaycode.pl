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
      </StyledDescriptionsWrapper>
    </StyledWrapper>
  );
}
