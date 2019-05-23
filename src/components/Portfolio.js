import React from 'react';
import {Link} from 'react-router-dom';
const Portfolio = () =>(
    <div>
        <p>this is the Portfolio page</p>
        <Link to="/portfolio/1">Item one</Link>
        <Link to="/portfolio/2">Item two</Link>
    </div>
);
export default Portfolio;