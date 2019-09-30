import React, { Component } from 'react';
import { Link } from 'react-router';

class Banner extends Component {

    render(){
        return (
            <div id="text-banner">
                <div className="container border"><a><h4>SITE BETA CHANGE LIST (FOR ENGW3302 FINAL, CLICK TO HIDE)</h4>
                    <p>                       
                         <ol>
                            <li>
                            Added new project card / page: "Technical Writing"
                            </li>
                            <li>
                            Added beta filter feature to communicate the different 'pillars' of areas of experience that I'd bring to a product management job.
                            <br></br>
                            Can be accessed by clicking "all projects" button on the projects page. 
                            </li>
                            Live site can be viewed at noahappleby.com for comparison. Feature 2 needs further testing and tinkering before going live.
                        </ol>
                    </p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Banner