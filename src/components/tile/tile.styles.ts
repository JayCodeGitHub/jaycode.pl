import styled from "styled-components";
import Image from "next/image";

export const StyledWrapper = styled.div`
    height: 100%;
    width: 25%;
    position: relative;
    border-radius: 1.2rem;
    overflow: hidden;
`

export const StyledLink = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 70%;
    z-index: 4;
`
    
export const StyledTileContent = styled.div`
    z-index: 3;
    position: absolute;
    width: 80%;
    min-height: 30vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    background: linear-gradient(${({ color }) => (color == 'pink' ? 'to top,rgba(248, 51, 61, .5),rgba(248, 51, 61, 0) 90%,transparent 50%' : null)});
    background: linear-gradient(${({ color }) => (color == 'green' ? 'to top,rgba(27, 158, 75, .5),rgba(27, 158, 75, 0) 90%,transparent 50%' : null)});
    background: linear-gradient(${({ color }) => (color == 'red' ? 'to top,rgba(241, 27, 37, .5),rgba(241, 27, 37, 0) 90%,transparent 50%' : null)});
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: 2;
`

export const StyledBackgroundImage = styled(Image)<{hover: boolean}>`
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    object-fit: cover;
    object-position: top;
    z-index: 1;
    filter: grayscale(${({ hover }) => (hover ? '0%' : '100%')});
    transform: scale(${({ hover }) => (hover ? '1.1' : '1')});
    transition: all 0.3s ease-in-out;
`

