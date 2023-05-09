import { StyledWrapper, StyledTitle } from "./hero.styles";

export interface HeaderProps {
  title: string;
}

export default function Hero({ title }: HeaderProps) {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
    </StyledWrapper>
  );
}
