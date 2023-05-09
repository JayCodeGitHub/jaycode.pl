import styled from "styled-components";

export const StyledWrapper = styled.span`
  svg {
    width: 4rem;
    height: 4rem;
    fill: ${({ theme }) => theme.white};
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.grey};
      transform: translateY(20%);
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;
