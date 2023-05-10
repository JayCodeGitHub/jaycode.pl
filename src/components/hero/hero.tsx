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
import ScrollButton from "../scrollButton/scrollButton";
import { heroItems } from "@/assets/heroItems";

export default function Hero() {
  return (
    <StyledOuterWrapper>
      <StyledImage
        src="/images/profile.webp"
        loading="eager"
        width={500}
        height={643}
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
      <StyledScrollButtonWrapper
        href="#projects"
        aria-label="Scroll Down Button"
      >
        <ScrollButton />
      </StyledScrollButtonWrapper>
    </StyledOuterWrapper>
  );
}
