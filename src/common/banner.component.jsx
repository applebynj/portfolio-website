import React, { Component } from 'react';
import { Link } from 'react-router';

class Banner extends Component {

    render(){
        return (
            <div id="text-banner">
                <div className="container border"><a href="/projects/Technical%20Writing"><h4>This is a beta version of my portfolio for ENGW3302. Changes include:
                    <br></br>
                    (1) adding new project page for writing (click to view)
                    <br></br>
                    (2) adding beta filter feature which can be accessed by clicking "all projects" button on the projects page.
                    <br></br>
                </h4></a></div>
            </div>
        );
    }
}

export default Banner