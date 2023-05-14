import styled from "styled-components";
import Image from "next/image";

export const StyledOuterWrapper = styled.section`
    padding: 2.5vw;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 0 15vw;
        margin: 2.5vw 0 4vw 0;
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const StyledDescriptionsWrapper = styled.div`
    padding: 5%;
    width: 65%;
    gap: 4rem;
    display: flex;
    flex-direction: column;
`

export const StyledTitle = styled.h2`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.m};
`

export const StyledDescription = styled.p`
    color: ${({ theme }) => theme.grey};
    font-size: ${({ theme }) => theme.font.size.s};
`

export const StyledLinksWrapper = styled.span`
    color: ${({ theme }) => theme.white};
`

export const StyledTechnologiesWrapper = styled.ul`
    color: ${({ theme }) => theme.white};
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    h3 {
        font-size: ${({ theme }) => theme.font.size.s};
        padding-right: 2rem;
        margin-right: 2rem;
        border-right: solid 2px ${({ theme }) => theme.grey};
    }
`

export const StyledTechnology = styled.img`
    color: ${({ theme }) => theme.primary};
    width: 4rem;
    height: 4rem;
`

export const StyledImageWrapper = styled.div`
    width: 35%;
`

export const StyledImage = styled(Image)`
    width: 95%;
    height: auto;
    margin: 0 2.5%;
    object-fit: contain;
    border-radius: 1.2rem;
`