import styled from 'styled-components';

export const StyledBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.tertiary};
  z-index: -10;
`;

export const StyledBacground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(transparent, ${({ theme }) => theme.tertiary});
`;