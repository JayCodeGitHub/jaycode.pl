import { createGlobalStyle } from 'styled-components';

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body {
        max-width: 100vw;
        position: relative;
        overflow-x: hidden;
        background-color: #ECE9EA;
        font-family: ${inter.style.fontFamily};
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;