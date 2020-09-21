import React from 'react';

const PortfolioItem = (props) => {
    console.log(props)
    return (
        <div>
            This page is for item with id {props.match.params.id}
        </div>
    );
};

export default PortfolioItem;