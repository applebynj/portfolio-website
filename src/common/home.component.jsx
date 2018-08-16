import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCardDeck from '../project/project-card-deck.component.jsx'
import Banner from './banner.component.jsx';
import fullpage from 'fullpage.js';

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

    componentDidMount() {
        fullpage('#fullpage', {
            //options here TODO: update license key
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling:true,
            navigation:true,
            navigationPosition: 'right',
        });
    }

    render(){

        const projects = this.props.route.data;

        return (
            <div>
                <section className="nav">
                    <Link
                        to={"/about"}>
                        more about me
                    </Link>
                </section>

                <div id="fullpage">
                    <div className="section">
                        <section className="center-container">
                            <div id="home-hello" className="center gray-border-left">
                                <h1 className="serif">Hello, welcome!</h1>
                                <h2 className="font-light">
                                    I'm Noah, a developer-designer with a passion for defining, building and evaluating user experiences. 
                                </h2>
                            </div>
                        </section>
                    </div>
                    <div className="section">
                        <div id="home-projects">
                                <ProjectCardDeck data={projects}></ProjectCardDeck>
                            </div>
                            <div id="home-projects-label">
                                <button type="button" className="serif" onClick={() => {{this.showAllCards()}}}>See all Projects</button>
                        </div> 
                    </div>
                </div>
                <Banner/>
            </div>
        );
    }
}

export default Home

        //     <div>
                
        //     <div className="site-container">
        //     </div>
        //     
        // </div>

            /*  */