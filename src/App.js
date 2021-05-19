import React from 'react';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import WelcomeComponent from './components/WelcomeComponent';
import { BrowserRouter, Route } from 'react-router-dom';
import ItemPageContainer from './containers/ItemPageContainer';
import MarketplaceContainer from './containers/MarketplaceContainer';
import UserPageConteiner from './containers/UserPageContainer';

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
                            <MarketplaceContainer />
                        </div>}
                />
                <Route
                    exact
                    path="/([a-z0-9A-Z_-]{3,50})"
                    render={() => <ItemPageContainer />}
                />
                <Route
                    path="/user/:userId"
                    render={() => <UserPageConteiner />}
                />
            </BrowserRouter>
        </div>
    );
}
