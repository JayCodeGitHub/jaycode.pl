import styled from "styled-components";

export const StyledOuterWrapper = styled.section``

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    margin: 5rem 20rem;
    ${({ theme }) => theme.mq.desktop} {
        align-items: center;
        flex-direction: row;
    }
`

export const StyledTitle = styled.h2`
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.white};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70vh;
    color: white;
    margin: 5vh 0;
    padding: 0 8%;
    a {
        cursor: pointer;
        position: absolute;
        top: 0;
        width: 100%;
        height: 70%;
        z-index: 4;
    }
`
