import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        text-decoration: none;
        list-style-type: none;
    }

    #root {
        min-height: 100vh;
        background-color: #e8e8e8;
        position: relative;
    }

    img, a {
        display: inline-block;
    } 

`