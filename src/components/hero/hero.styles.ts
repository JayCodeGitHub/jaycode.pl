import styled from "styled-components";
import Image from "next/image";

export const StyledOuterWrapper = styled.header`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100vw;
    height: calc(100vh - 8rem);
    padding: 8% 18%;
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35rem;
    margin-left: 10rem;
`

export const StyledButtonsWrapper = styled.span`
    display: flex;
`

export const StyledTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.font.size.m};
    color: ${({ theme }) => theme.white};
    padding-left: 20px;
    margin: 0;
    ${({ theme }) => theme.mq.desktop}  {
        font-size: ${({ theme }) => theme.font.size.xxl};
    }
`
export const StyledSubTitle = styled.h2`
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.grey};
    margin: 0;
    max-width: 60rem;
    padding-left: 10px;
    ${({ theme }) => theme.mq.desktop}  {
        font-size: ${({ theme }) => theme.font.size.l};
    }
`

export const StyledImage = styled(Image)`
    object-fit: cover;
    object-position: top;
    border-radius: 1.2rem;
    width: 90vw;
    height: 40vw;
    @media (min-width: 1024px) {
        width: 18vw;
        height: 23vw;
    }
`

export const StyledScrollButtonWrapper = styled.a`
    position: absolute;
    top: 90vh;
    left: 50%;
    transform: translateX(-50%);
`