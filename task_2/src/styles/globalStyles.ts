import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-y: scroll;
    scroll-behavior: smooth;
    font-family: 'Roboto Flex', sans-serif;
    background-color: #f9f9f9;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: 1.15; 
    margin: 0; 
    padding: 0;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    background: none
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  select { 
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
`
