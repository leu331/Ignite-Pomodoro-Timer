import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {

}

:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${props => props.theme.green};
    border: none;
}

body, input, textarea, button {
    font-family: "Roboto", sans-serif;

    font-weight: 400;
    font-size: 1rem;
   
}

body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.white};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
}

button {
    cursor: pointer;
}

`