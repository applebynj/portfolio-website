import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCardDeck from '../project/project-card-deck.component.jsx'

class Home extends Component {

    render(){
        const projects = this.props.route.data;

        return (
            <div className="site-container">
                <section id="home-hello" className="gray-border-left">
                    <p className="serif">Hey there! I’m Noah.</p>
                    <p>
                        I like identifying problems and finding their solutions <br/>
                        <i>… and</i> sticking around to make those solutions a reality.
                    </p>
                    <i>
                        Let’s have some fun.
                    </i>
                </section>
                <section className="nav">
                    <Link
                        to={"/about"}>
                        more about me
                    </Link>
                </section>
                <section id="home-projects">
                    <ProjectCardDeck data={projects}></ProjectCardDeck>
                </section>
                <div id="home-projects-label">
                    <h4 className="serif">Pick a card, any card!</h4>
                </div>
            </div>);
    }
}

export default Home