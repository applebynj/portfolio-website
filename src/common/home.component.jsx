import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render(){
        return (
            <div className="site-container">
                <section id="home-hello">
                    <p className="serif">Hey there! I’m Noah.</p>
                    <p>
                        I like identifying problems and finding their solutions <br/>
                        <i>… and</i> sticking around to make those solutions a reality.
                    </p>
                    <i>
                        Let’s have some fun.
                    </i>
                </section>
                <section id="home-nav">
                    <Link
                        to={"/about"}>
                        more about me
                    </Link>
                </section>
            </div>);
    }
}

export default Home