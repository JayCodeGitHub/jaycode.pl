import styled from "styled-components";
import Image from "next/image";

export const StyledWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 150px;
    gap: 10px;
    height: 25vw;
    ${({ theme }) => theme.mq.desktop} {
        height: 35vw;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        height: 25vw;
    }
`

export const StyledImageWrapper = styled.a<{order: number}>`
    width: 55%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    left: ${({ order }) => order % 2 === 0 ?  '0' : '45%'};
`

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.2rem;
`

export const StyledDescriptionsWrapper = styled.div<{order: number}>`
    position: absolute;
    top: 0;
    left: 50%;
    left: ${({ order }) => order % 2 === 0 ?  '50%' : '0'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ order }) => order % 2 === 0 ?  'flex-end' : 'flex-start'};
    gap: 2rem;
    width: 50%;
    height: 100%;
`

export const StyledType = styled.p`
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.font.size.xs};
`

export const StyledTitle = styled.h2`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.s};
`

export const StyledDescription = styled.p`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.xs};
    background-color: #1b1b1b;
    text-align: right;
    padding: 20px;
    border-radius: .5rem;
`

export const StyledTechnologiesWrapper = styled.ul`
    color: ${({ theme }) => theme.primary};
    display: flex;
    gap: 2rem;
    list-style: none;
`

export const StyledTechnology = styled.li`
    font-size: ${({ theme }) => theme.font.size.xs};
`