import styled from "styled-components";

export const StyledWrapper = styled.section`
    padding: 2.5vw;
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.mq.tablet} {
        gap: 15rem;
    }
    ${({ theme }) => theme.mq.desktop} {
        gap: 5rem;
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2.5vw 10vw;

    }
`