import React from 'react';
const PortfolioItem = (props) =>(
    <div>
        <h3>a thing i've done</h3>
        <p>this is the PortfolioItem page of item with id of {props.match.params.id}</p>
    </div>
);
export default PortfolioItem;