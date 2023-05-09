import { StyledWrapper, StyledTitle } from "./header.styles";

export interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
    </StyledWrapper>
  );
}
