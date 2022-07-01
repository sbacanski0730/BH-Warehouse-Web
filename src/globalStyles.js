import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root{
        --main-color:#d3ad7f;
        --black:#13131a;
        --bg:#010103;
        --border:.1rem solid rgba(255,255,255,.3);
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
        outline: none;
        border: none;
        /* font-family: 'Courier New', Courier, monospace; */
        font-family: 'Montserrat', sans-serif;
    }
    *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        overflow: hidden;
    }

    body {
        background-color: var(--bg);
    }
`;
export default GlobalStyles;
