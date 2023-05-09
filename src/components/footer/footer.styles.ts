import styled from "styled-components";

export const StyledWrapper = styled.footer`
    width: 100%;
    height: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.tertiary};
    border-top: solid 2px ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    ${({ theme }) => theme.mq.desktop}  {
        height: 8rem;
    }
`

export const StyledEmailWrapper = styled.span`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: ${({ theme }) => theme.font.size.xs};
        &:hover {
            color: ${({ theme }) => theme.primary};
            transition: color .1s ease-in-out;
        }
    }
    ${({ theme }) => theme.mq.desktop}  {
        width: 50%;
        height: 100%;
        h2 {
            font-size: ${({ theme }) => theme.font.size.s};
        }
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`

export const StyledIconWrapper = styled.a`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        fill: ${({ theme }) => theme.white};
        height: 35px;
        &:hover {
            fill: ${({ theme }) => theme.primary};
            transition: fill .1s ease-in-out;
        }
    }
    ${({ theme }) => theme.mq.desktop}  {
        width: 25%;
        height: 100%;
        svg {
            height: 30px;
        }
    }
`