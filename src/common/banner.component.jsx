import React, { Component } from 'react';
import { Link } from 'react-router';

class Banner extends Component {

    render(){
        return (
            <div id="text-banner">
                <div className="container border"><a href="https://trello.com/b/ePatTVuq/portfolio-site"><h4>This site is a work in progress, click here to see the backlog.
                </h4></a></div>
            </div>
        );
    }
}

export default Banner