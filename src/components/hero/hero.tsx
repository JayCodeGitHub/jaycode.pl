import {
  StyledWrapper,
  StyledTitle,
  StyledSubTitle,
  StyledImage,
  StyledScrollButtonWrapper,
  StyledOuterWrapper,
  StyledButtonsWrapper,
} from "./hero.styles";
import Button from "../button/button.styles";
import Link from "next/link";

const heroItems = {
  title: `Hi, I'm Jakub`,
  subTitle: `A passionate Front-end Developer`,
  button: `Download my CV`,
  buttonHref: `https://drive.google.com/file/d/1X1U-XW9mIOJ3B3jUPhQrzKB6FKEXApam/view?usp=sharing`,
  secondButton: `Let's talk`,
  secondButtonHref: `/contact`,
};

export default function Hero() {
  return (
    <StyledOuterWrapper>
      <StyledImage
        src="/images/profile.jpg"
        width={1000}
        height={1286}
        alt="Profile image"
      />
      <StyledWrapper>
        <StyledTitle>{heroItems.title}</StyledTitle>
        <StyledSubTitle>{heroItems.subTitle}</StyledSubTitle>
        <StyledButtonsWrapper>
          <a href={heroItems.buttonHref} target="_blank">
            <Button>{heroItems.button}</Button>
          </a>
          <Link href={heroItems.secondButtonHref}>
            <Button>{heroItems.secondButton}</Button>
          </Link>
        </StyledButtonsWrapper>
      </StyledWrapper>
      <StyledScrollButtonWrapper href="#projects">
        <button>See More</button>
      </StyledScrollButtonWrapper>
    </StyledOuterWrapper>
  );
}
