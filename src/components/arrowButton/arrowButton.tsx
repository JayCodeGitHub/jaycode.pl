import React from "react";
import { StyledOuterWrapper } from "./arrowButton.styles";

export interface ArrowButtonProps {
  children: React.ReactNode;
  to: string;
}

const ArrowButton = ({ children, to }: ArrowButtonProps) => {
  return <StyledOuterWrapper href={to}>{children}</StyledOuterWrapper>;
};

export default ArrowButton;
