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
          <StyledLinksWrapper>Linked In, GitHub</StyledLinksWrapper>
          <StyledTechnologiesWrapper>
            <h3>Tech Stack</h3>
            <li>
              <StyledTechnology src="/icons/scss.svg" alt="Technology Logo" />
            </li>
            <li>
              <StyledTechnology src="/icons/html.svg" alt="Technology Logo" />
            </li>
            <li>
              <StyledTechnology src="/icons/js.svg" alt="Technology Logo" />
            </li>
            <li>
              <StyledTechnology src="/icons/ts.svg" alt="Technology Logo" />
            </li>
            <li>
              <StyledTechnology src="/icons/redux.svg" alt="Technology Logo" />
            </li>
            <li>
              <StyledTechnology src="/icons/react.svg" alt="Technology Logo" />
            </li>
            <li>
              <StyledTechnology
                src="/icons/tailwind.svg"
                alt="Technology Logo"
              />
            </li>
            <li>
              <StyledTechnology
                src="/icons/graphql.svg"
                alt="Technology Logo"
              />
            </li>
            <li>
              <StyledTechnology src="/icons/git.svg" alt="Technology Logo" />
            </li>
          </StyledTechnologiesWrapper>
        </StyledDescriptionsWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/profile.webp"
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
