import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root{
        --main-color:#d3ad7f;
        --black:#13131a;
        --bg:#010103;
        --border:.1rem solid rgba(255,255,255,.3);
    }

    *, *::after, *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
        outline: none;
        border: none;
        font-family: 'Lato', sans-serif;
    }

    html {
        font-size: 17px;
        /* overflow: hidden; */
        /* overflow-x: hidden; */
        /* scroll-padding-top: 6rem; */
        /* scroll-behavior: smooth; */
    }

    //TODO: main scrollbar styles

    body {
        background-color: var(--bg);
        /* min-height: 100vh; */
    }

`;
export default GlobalStyles;
