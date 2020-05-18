import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background:${theme => theme.body};
    color: ${theme => theme.text};
    transition: all 0.5s linear;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`