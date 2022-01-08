import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: "Roboto", sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }
`
