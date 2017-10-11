import React, { Component } from 'react';
import { Link } from 'react-router';

class Banner extends Component {

    render(){
        return (
            <div id="text-banner">
                <div className="container"><h3>This site is a work in progress, please enjoy this MVP in the meantime! :)</h3></div>
            </div>
        );
    }
}

export default Banner