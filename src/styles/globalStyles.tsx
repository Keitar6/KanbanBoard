import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, #root, body{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;
}

html, body {
    background-color: ${({ theme }) => theme.palette.background};
    padding: 16px;
    height: 100%;
    display:flex;
}

*, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}

ol, ul, li {
	list-style: none;
}

`;

export default GlobalStyle;
