import styled from 'styled-components'

export const Button = styled.button`
    font-size: ${({ theme }) => theme.font.size.xs};
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    border: solid 3px ${({ theme }) => theme.white};
    font-weight: 500;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 1.2rem;
    padding: 1.5rem 2.5rem;
    transition: color, background-color 0.2s ease-in-out;
    cursor: pointer;
    ${({ theme }) => theme.mq.desktop}  {
        font-size: ${({ theme }) => theme.font.size.s};
        margin: 0 20px;
        padding: 2rem 4.5rem;
    }
    &:hover {
        background: transparent;
        color: ${({ theme }) => theme.white};
    }
`

export default Button;