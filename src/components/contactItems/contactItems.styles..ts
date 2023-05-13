import styled from 'styled-components'

export const StyledOuterWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(60vh);
    padding: 2.5vw;
    ${({ theme }) => theme.mq.tablet} {  
        flex-direction: row;
        padding: 2.5vw 15vw;
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 2rem 0;
    ${({ theme }) => theme.mq.tablet} {        
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        margin: 0;
    }
`

export const StyledContactItem = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.s};
    text-decoration: none;
    border-radius: 2rem;
    border: 2px solid ${({ theme }) => theme.theme};
    width: 90%;
    margin: 2rem 0;
    padding: 4rem 6rem;
    color: ${({ theme }) => theme.white};
    transition: color 0.1s ease-in-out;
    ${({ theme }) => theme.mq.desktop} {        
        font-size: ${({ theme }) => theme.font.size.m};
        width: auto;
    }
    &:hover {
        color: ${({ theme }) => theme.grey};
    }
    svg {
        margin: 0 2rem;
    }
`