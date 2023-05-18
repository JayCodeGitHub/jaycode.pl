import { StyledWrapper, StyledTitle } from "./header.styles";
import { motion } from "framer-motion";

const MotionTitle = motion(StyledTitle);

export interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <StyledWrapper>
      <MotionTitle
        initial={{ y: "-100%", opacity: "0%" }}
        animate={{ y: "0%", opacity: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        exit={{ y: "-100%", opacity: "0%" }}
      >
        {title}
      </MotionTitle>
    </StyledWrapper>
  );
}
