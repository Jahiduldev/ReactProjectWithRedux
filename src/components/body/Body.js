
import React from 'react';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';

import { Route, Redirect } from "react-router-dom";

const Body = () => {

    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          
        </div>
    );
}
export default Body;
