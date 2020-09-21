import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "../components/HomePage";
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItem';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import ContactMe from '../components/ContactMe';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItem} />
                <Route path="/contactme" component={ContactMe} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;