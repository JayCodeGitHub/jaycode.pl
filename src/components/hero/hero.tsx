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
import { motion } from "framer-motion";

const MotionImage = motion(StyledImage);
const MotionTitle = motion(StyledTitle);
const MotionSubTitle = motion(StyledSubTitle);
const MotionCV = motion(Button);
const MotionContact = motion(Button);
const MotionScroll = motion(StyledScrollButtonWrapper);

export default function Hero() {
  return (
    <StyledOuterWrapper>
      <MotionImage
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        exit={{ x: "-100%" }}
        src="/images/profile.webp"
        loading="eager"
        width={500}
        height={643}
        alt="Profile image"
      />
      <StyledWrapper>
        <span>
          <MotionTitle
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
            exit={{ x: "-100%" }}
          >
            {heroItems.title}
          </MotionTitle>
        </span>
        <span>
          <MotionSubTitle
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 0.8, duration: 0.4, ease: "easeInOut" }}
            exit={{ opacity: "0%" }}
          >
            {heroItems.subTitle}
          </MotionSubTitle>
        </span>
        <StyledButtonsWrapper>
          <a href={heroItems.buttonHref} target="_blank">
            <MotionCV
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 1.2, duration: 0.4, ease: "easeInOut" }}
              exit={{ opacity: "0%" }}
            >
              {heroItems.button}
            </MotionCV>
          </a>
          <Link href={heroItems.secondButtonHref}>
            <MotionContact
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 1.6, duration: 0.4, ease: "easeInOut" }}
              exit={{ opacity: "0%" }}
            >
              {heroItems.secondButton}
            </MotionContact>
          </Link>
        </StyledButtonsWrapper>
      </StyledWrapper>
      <MotionScroll
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        transition={{ delay: 1.6, duration: 0.4, ease: "easeInOut" }}
        exit={{ opacity: "0%" }}
        href="#projects"
        aria-label="Scroll Down Button"
      >
        <ScrollButton />
      </MotionScroll>
    </StyledOuterWrapper>
  );
}
