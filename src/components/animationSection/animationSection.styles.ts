import styled from "styled-components";

export const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 5rem 0;
    padding: 2.5vw;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        padding: 0 15vw;
        margin: 2.5vw 0 4vw 0;
    }
`

export const StyledSvgWrapper = styled.div`
    width: 100%;
    svg {
        width: 100%;
        height: auto;
    }
    ${({ theme }) => theme.mq.desktop} {
        width: 50%;
    }
`

export const StyledDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    width: 100%;
    ${({ theme }) => theme.mq.desktop} {
        width: 50%;
    }
`

export const StyledTitle = styled.h1`
    margin: 2.5rem 0;
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.white};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
    }
`

export const StyledDescription = styled.p`
    color: ${({ theme }) => theme.grey};
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.xs};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`
