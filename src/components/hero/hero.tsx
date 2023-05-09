import {
  StyledWrapper,
  StyledTitle,
  StyledSubTitle,
  StyledImage,
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
    <StyledWrapper>
      <StyledTitle>{heroItems.title}</StyledTitle>
      <StyledSubTitle>{heroItems.subTitle}</StyledSubTitle>
      <a href="#projects">
        <button>See More</button>
      </a>
      <a href={heroItems.buttonHref} target="_blank">
        <Button>{heroItems.button}</Button>
      </a>
      <Link href={heroItems.secondButtonHref}>
        <Button>{heroItems.secondButton}</Button>
      </Link>
      <StyledImage
        src="/images/profile.jpg"
        width={1000}
        height={615}
        alt="Profile image"
      />
    </StyledWrapper>
  );
}
