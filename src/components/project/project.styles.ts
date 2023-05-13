import styled from "styled-components";
import Image from "next/image";

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin-bottom: 150px;
    gap: 10px;
`

export const StyledImageWrapper = styled.a`
    width: 50%;
    height: 100%;
`

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.2rem;
`

export const StyledDescriptionsWrapper = styled.div``

export const StyledType = styled.p``

export const StyledTitle = styled.h2``

export const StyledDescription = styled.p``

export const StyledTechnologiesWrapper = styled.ul``

export const StyledTechnology = styled.li``