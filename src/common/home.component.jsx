import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCardDeck from '../project/project-card-deck.component.jsx'
import Banner from './banner.component.jsx';


class Home extends Component {

    showAllCards(){
        if($('.all-cards').length > 0) {
            $('#home-projects').removeClass("all-cards");
            $('#project-cards').removeClass("all-cards");
            $('.project-card').removeClass("all-cards");
            $('#home-projects-label').removeClass("all-cards");
            $('#home-projects-label button').html("show all cards");
        } else {
            $('#home-projects').addClass("all-cards");
            $('#project-cards').addClass("all-cards");
            $('.project-card').addClass("all-cards");
            $('#home-projects-label').addClass("all-cards");
            $('#home-projects-label button').html("show hand of cards");
        }
    };

    render(){
        const projects = this.props.route.data;

        return (
            <div>
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
                        <button type="button" onClick={() => {{this.showAllCards()}}}>show all cards</button>
                    </div>
                </div>
                {/* <Banner/> */}
            </div>
        );
    }
}

export default Home