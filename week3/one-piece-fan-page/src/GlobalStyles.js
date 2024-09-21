import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: ${(props) => (props.theme === 'light' ? '#f4f4f4' : '#111')};
    color: ${(props) => (props.theme === 'light' ? '#111' : '#f4f4f4')};
    margin: 0;
    padding: 0;
  }

  header {
    background-color: red; /* Change to red */
    color: #fff;
    padding: 1em;
    text-align: center;
  }

  nav a {
    margin: 0 1em;
    color: #fff;
    text-decoration: none;
  }

  section {
    margin: 2em;
    padding: 2em;
    background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#444')};
    border-radius: 10px;
  }

  h2 {
    color: ${(props) => (props.theme === 'light' ? '#0f0f0f' : '#f4f4f4')};
  }

  #characters-list, #episodes-list {
    margin-top: 1em;
  }
`;

export default GlobalStyle;
