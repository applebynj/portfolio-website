import React, { Component } from 'react';
import { Link } from 'react-router';

class Banner extends Component {

    render(){
        return (
            <div id="text-banner">
                <div className="container"><h4>This site is a work in progress MVP! My old site can be found <a href="https://applebyn.myportfolio.com">here.</a>
                </h4></div>
            </div>
        );
    }
}

export default Banner