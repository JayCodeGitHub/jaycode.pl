import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.s};
  text-decoration: none;
  position: relative;
  &.active {
    color: ${({ theme }) => theme.primary};
  }
  &::before {
    content: "";
    width: 120%;
    height: 4px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    top: 110%;
    left: -10%;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.2s ease-in-out;
  }
  &:hover::before {
    transform: scaleX(1);
  }
  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;