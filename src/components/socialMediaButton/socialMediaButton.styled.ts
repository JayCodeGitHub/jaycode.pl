import styled from "styled-components";

export const StyledOuterWrapper = styled.a`
    position: relative;
    width: auto;
`

export const StyledWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 1rem;
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.tertiary};
    border: solid 2px ${({ theme }) => theme.white};
    border-radius: 1.2rem;
    padding: .6rem 1.5rem;
    width: 100%;
    transition: all 0.2s ease-in-out;
    svg {
        width: ${({ theme }) => theme.font.size.s};
    }
    &:hover {
        color: ${({ theme }) => theme.grey};
        border: solid 2px ${({ theme }) => theme.grey};
    }
    ${({ theme }) => theme.mq.desktop}  {
        font-size: ${({ theme }) => theme.font.size.xs};
        padding: .8rem 2rem;
    }
`