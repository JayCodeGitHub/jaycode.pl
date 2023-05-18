import styled from "styled-components";
import Image from "next/image";

export const StyledOuterWrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100vw;
    height: calc(100vh - 8rem);
    padding: 1rem 0;
    ${({ theme }) => theme.mq.tablet}  { 
        flex-direction: row;
        align-items: flex-start;
        gap: 10rem;
        padding: 8% 10%;
    }
    ${({ theme }) => theme.mq.bigDesktop}  {
        padding: 8% 18%;
    }
    span {
        overflow: hidden;
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 32vh;
    ${({ theme }) => theme.mq.desktop}  { 
        height: 35rem;
    }
`

export const StyledButtonsWrapper = styled.span`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 20px;
    ${({ theme }) => theme.mq.desktop}  {
        flex-direction: row;
        padding-left: 0;
    }
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
    margin: 25px 0;
    max-width: 60rem;
    padding-left: 10px;
    ${({ theme }) => theme.mq.desktop}  {
        margin: 0;
        font-size: ${({ theme }) => theme.font.size.l};
    }
`

export const StyledImage = styled(Image)`
    object-fit: cover;
    object-position: top;
    border-radius: 1.2rem;
    width: 30vh;
    height: 36vh;
    ${({ theme }) => theme.mq.desktop}  {
        width: 23vw;
        height: 30vw;
    }
    ${({ theme }) => theme.mq.bigDesktop}  {
        width: 18vw;
        height: 23vw;
    }
`

export const StyledScrollButtonWrapper = styled.a`
    position: absolute;
    top: 92vh;
    left: 50%;
    display: none;
    transform: translateX(-50%);
    ${({ theme }) => theme.mq.tablet}  {
        display: flex;
    }
`