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

const AboutSectionItems = {
  title: `Hello!!! My name is Jakub`,
  description: ` I like to create things that live on the internet. For several years
  I have been developing my skills in HTML, CSS, and JavaScript. I
  will be a good member of the team because I learn quickly and work
  well in a team.`,
  technologies: [
    {
      image: `/icons/scss.svg`,
      alt: `SCSS logo`,
    },
    {
      image: `/icons/html.svg`,
      alt: `HTML logo`,
    },
    {
      image: `/icons/js.svg`,
      alt: `JavaScript logo`,
    },
    {
      image: `/icons/ts.svg`,
      alt: `TypeScript logo`,
    },
    {
      image: `/icons/redux.svg`,
      alt: `Redux logo`,
    },
    {
      image: `/icons/React.svg`,
      alt: `React logo`,
    },
    {
      image: `/icons/tailwind.svg`,
      alt: `Tailwind logo`,
    },
    {
      image: `/icons/graphql.svg`,
      alt: `GraphQL logo`,
    },
    {
      image: `/icons/git.svg`,
      alt: `Git logo`,
    },
  ],
  image: `/images/profile.webp`,
};

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
