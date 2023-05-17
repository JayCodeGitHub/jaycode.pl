import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  StyledWrapper,
  StyledSvgWrapper,
  StyledDescriptions,
  StyledTitle,
  StyledDescription,
} from "./animationSection.styles";
import Scene from "./scene";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationSection() {
  const wrapper = useRef<any>(null);
  useEffect(() => {
    if (wrapper.current) {
      const [elements] = wrapper.current.children;

      const background = elements.getElementById("background");
      const desktop = elements.getElementById("desktop");
      const laptop = elements.getElementById("laptop");
      const cup = elements.getElementById("cup");
      const character = elements.getElementById("character");

      gsap.set([background, desktop, laptop, cup, character], {
        autoAlpha: 0,
      });

      gsap.fromTo(
        background,
        {},
        {
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: wrapper.current,
            start: "20% 50%",
          },
        }
      );
      gsap.fromTo(
        desktop,
        { y: "-=100" },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: wrapper.current,
            start: "20% 50%",
          },
        }
      );
      gsap.fromTo(
        laptop,
        { y: "-=100" },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 1,
          scrollTrigger: {
            trigger: wrapper.current,
            start: "20% 50%",
          },
        }
      );
      gsap.fromTo(
        cup,
        { x: "+=100" },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 1.5,
          scrollTrigger: {
            trigger: wrapper.current,
            start: "20% 50%",
          },
        }
      );
      gsap.fromTo(
        character,
        {},
        {
          autoAlpha: 1,
          duration: 1,
          delay: 2,
          scrollTrigger: {
            trigger: wrapper.current,
            start: "20% 50%",
          },
        }
      );
    }
  });
  return (
    <StyledWrapper>
      <StyledSvgWrapper ref={wrapper}>
        <Scene />
      </StyledSvgWrapper>
      <StyledDescriptions>
        <StyledTitle>
          The applications I create are easy to use and easy to develop.
        </StyledTitle>
        <StyledDescription>
          I have experience in writing applications in JavaScript ES6+ with use
          async and await. And experience with Git and GitHub
        </StyledDescription>
      </StyledDescriptions>
    </StyledWrapper>
  );
}
