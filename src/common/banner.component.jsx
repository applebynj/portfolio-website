import React, { Component } from 'react';
import { Link } from 'react-router';

class Banner extends Component {

    render(){
        return (
            <div id="text-banner">
                <div className="container border"><a href="https://noahappleby.com"><h4>This is an archive of my old site. Click here to see the new one!
                </h4></a></div>
            </div>
        );
    }
}

export default Banner