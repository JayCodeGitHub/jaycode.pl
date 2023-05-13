import styled from "styled-components";

export const StyledWrapper = styled.section`
    padding: 2.5vw;
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2.5vw 10vw;
    }
`