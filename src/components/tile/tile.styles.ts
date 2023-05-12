import styled from "styled-components";
import Image from "next/image";
import Button from "../button/button.styles";


export const StyledWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 85%;
    height: 60rem;
    border-radius: 1.2rem;
    ${({ theme }) => theme.mq.tablet} {
        width: 30%;
        height: 100%;
    }
    ${({ theme }) => theme.mq.desktop} {
        width: 25%;
    }
`

export const StyledLink = styled.a`
    position: absolute;
    top: 0;
    z-index: 4;
    width: 100%;
    height: 70%;
`

export const StyledButton = styled(Button)`
    width: 100%;
    margin: 0;
`
    
export const StyledTileContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 3;
    width: 80%;
    min-height: 30vh;
    gap: 5rem;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
`

export const StyledTitle = styled.h3`
    font-size: ${({ theme }) => theme.font.size.s};
`

export const StyledDescription = styled.p`
    font-size: ${({ theme }) => theme.font.size.xs};
`

export const StyledGradient = styled.div<{color: string}>`
    position: absolute;
    top: 0;
    z-index: 2;
    background: linear-gradient(${({ color }) => (color == 'pink' ? 'to top,rgba(248, 51, 61, .5),rgba(248, 51, 61, 0) 90%,transparent 50%' : null)});
    background: linear-gradient(${({ color }) => (color == 'green' ? 'to top,rgba(27, 158, 75, .5),rgba(27, 158, 75, 0) 90%,transparent 50%' : null)});
    background: linear-gradient(${({ color }) => (color == 'red' ? 'to top,rgba(241, 27, 37, .5),rgba(241, 27, 37, 0) 90%,transparent 50%' : null)});
    width: 100%;
    height: 100%;
`

export const StyledBackgroundImage = styled(Image)<{isactive: string}>`
    position: absolute;
    top: 0;
    z-index: 1;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
    filter: grayscale(${({ isactive }) => isactive == "true" ? '0%' : '100%'});
    transform: scale(${({ isactive }) => isactive == "true" ? '1.1' : '1'});
    transition: all 0.3s ease-in-out;
`

