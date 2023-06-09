import styled from "styled-components";
import Image from "next/image";

export const StyledOuterWrapper = styled.section`
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 0 15vw;
        margin: 2.5vw 0 4vw 0;
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding: 5%;
    gap: 10rem;
    margin-bottom: 5rem;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        gap: 0;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 0;
    }
`

export const StyledDescriptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5rem;
    padding: 5%;
    ${({ theme }) => theme.mq.desktop} {
        width: 70%;
    }

`

export const StyledTitle = styled.h2`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.s};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
    }
`

export const StyledDescription = styled.p`
    color: ${({ theme }) => theme.grey};
    font-size: ${({ theme }) => theme.font.size.xs};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const StyledLinksWrapper = styled.span`
    display: flex;
    gap: 2rem;
    width: min-content;
`

export const StyledTechnologiesWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.white};
    width: 100%;
    height: auto;
    gap: 5rem;
    list-style: none;
    h3 {
        text-align: center;
        width: 100%;
        font-size: ${({ theme }) => theme.font.size.s};
        padding-bottom: 1.8rem;
        margin-bottom: 1.8rem;
        border-bottom: solid 2px ${({ theme }) => theme.grey};
    }
    ${({ theme }) => theme.mq.desktop} {
        justify-content: flex-start;
        gap: 1.8rem;
        h3 {
            width: auto;
            border-bottom: 0;
            margin-bottom: 0;
            padding-bottom: 0;
            padding-right: 1.8rem;
            margin-right: 1.8rem;
            border-right: solid 2px ${({ theme }) => theme.grey};
        }
    }
`

export const StyledTechnology = styled.img`
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.primary};
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