import {
  StyledOuterWrapper,
  StyledWrapper,
  StyledContactItem,
} from "./contactItems.styles.";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function ContactItems() {
  return (
    <StyledOuterWrapper>
      <StyledWrapper>
        <StyledContactItem
          href="https://www.linkedin.com/in/jakub-gryzi%C5%84ski-b00296264/"
          target="_blank"
        >
          <BsLinkedin />
          LinkedIn
        </StyledContactItem>
        <StyledContactItem href="mailto:jakub.gryzinski@gmail.com">
          <FiMail />
          Email
        </StyledContactItem>
        <StyledContactItem
          href="https://github.com/JayCodeGitHub"
          target="_blank"
        >
          <BsGithub />
          GitHub
        </StyledContactItem>
      </StyledWrapper>
    </StyledOuterWrapper>
  );
}
