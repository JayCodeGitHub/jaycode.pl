import styled from "styled-components";

export const StyledWrapper = styled.header`
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.mq.desktop}  {
        padding-left: 0;
        width: auto;
        height: 25vh;
    }
`

export const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.m};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    ${({ theme }) => theme.mq.desktop}  {
        font-size: ${({ theme }) => theme.font.size.xxl};
    }
`