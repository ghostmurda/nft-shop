import React from 'react';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import WelcomeComponent from './components/WelcomeComponent';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Header />
            <WelcomeComponent />
        </div>
    );
}
