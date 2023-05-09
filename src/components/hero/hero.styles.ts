import styled from "styled-components";
import Image from "next/image";

export const StyledWrapper = styled.header`
    height: 100vh;
`
export const StyledTitle = styled.h1`
`
export const StyledSubTitle = styled.h2`
`

export const StyledImage = styled(Image)`
    width: 90vw;
    height: 40vw;
    object-fit: cover;
    object-position: top;
    border-radius: 1.2rem;
    @media (min-width: 1024px) {
        width: 19.4rem;
        height: 25rem;
    }
`