import React from 'react';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import WelcomeComponent from './components/WelcomeComponent';
import Marketplace from './components/Marketplace';
import { BrowserRouter, Route } from 'react-router-dom';
import ItemPage from './components/ItemPage';

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
            <BrowserRouter>
                <Header />
                <Route
                    exact
                    path="/"
                    render={() =>
                        <div>
                            <WelcomeComponent />
                            <Marketplace />
                        </div>}
                />
                <Route
                    path="/([a-z0-9A-Z_-]{3,50})"
                    render={() => <ItemPage />}
                />
            </BrowserRouter>
        </div>
    );
}
