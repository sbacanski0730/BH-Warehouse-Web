import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root{
        --main-color:#d3ad7f;
        --black:#13131a;
        --bg:#010103;
        --border:.1rem solid rgba(255,255,255,.3);
        --main-padding: 0 7%
    }

    *, *::after, *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
        outline: none;
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
    }

    #page-heading {
        max-width: 100%;
        color: #fff;
        text-align: center;
        font-size: 3rem;
        padding: 0.6rem 0;
        margin-bottom: 0.4rem;

        span {
            color: var(--main-color);
            font-size: 3rem;
        }
    }

`;
export default GlobalStyles;
