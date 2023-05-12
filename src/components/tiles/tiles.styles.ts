import styled from "styled-components";

export const StyledOuterWrapper = styled.section`
    padding: 10rem 0;
`

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 5%;
    ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;
        align-items: center;
        margin: 0 15rem;
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
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5rem;
    color: white;
    margin: 5vh 0;
    padding: 0;
    ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;
        height: 70vh;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 0 8%;
    }
`
