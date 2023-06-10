import styled from "styled-components";
import Image from "next/image";

export const StyledWrapper = styled.div`
    width: 100%;
    margin-bottom: 150px;
    gap: 10px;
    height: auto;
    position: relative;
    ${({ theme }) => theme.mq.tablet} {
        height: 28vw;
    }
    ${({ theme }) => theme.mq.desktop} {
        height: 28vw;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        height: 22vw;
    }
`

export const StyledImageWrapper = styled.a<{order: number}>`
    height: 100%;
    ${({ theme }) => theme.mq.tablet} {
        top: 0;
        position: absolute;
        left: ${({ order }) => order % 2 === 0 ?  '0' : '45%'};
        width: 55%;
    }
`

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1.2rem;
`

export const StyledDescriptionsWrapper = styled.div<{order: number}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: ${({ order }) => order % 2 === 0 ?  'flex-end' : 'flex-start'};
    gap: 2.5rem;
    width: 100%;
    ${({ theme }) => theme.mq.tablet} {
        position: absolute;
        width: 50%;
        top: 0;
        left: ${({ order }) => order % 2 === 0 ?  '50%' : '0'};
    }
`

export const StyledType = styled.p`
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.font.size.xs};
`

export const StyledTitle = styled.h2`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.s};
`

export const StyledDescription = styled.p<{order: number}>`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.xs};
    background-color: #1b1b1b;
    text-align: ${({ order }) => order % 2 === 0 ?  'right' : 'left'};
    padding: 20px;
    border-radius: .5rem;
    ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.font.size.xs};
    }
`

export const StyledLinksWrapper = styled.span`
    display: flex;
    gap: 4rem;
    width: min-content;
`

export const StyledTechnologiesWrapper = styled.ul<{order: number}>`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    color: ${({ theme }) => theme.primary};
    list-style: none;
    padding: 0;
    ${({ theme }) => theme.mq.tablet} {
        padding: ${({ order }) => order % 2 === 0 ?  '0 0 0 20% ' : '0 20% 0 0'};
    }
`

export const StyledTechnology = styled.li`
    font-size: ${({ theme }) => theme.font.size.xs};
`