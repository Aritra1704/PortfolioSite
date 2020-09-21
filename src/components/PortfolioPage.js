import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the following things I've done:</p>
        <NavLink  to="/portfolio/1" activeClassName="is-active">Item One</NavLink>
        <NavLink to="/portfolio/2" activeClassName="is-active">Item Two</NavLink>
    </div>
);

export default PortfolioPage;