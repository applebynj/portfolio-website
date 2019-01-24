import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCardDeck from '../project/project-card-deck.component.jsx'
import About from './about.component.jsx';
import Banner from './banner.component.jsx';
import fullpage from 'fullpage.js';

class Home extends Component {

    showAllCards(){
        if($('.all-cards').length > 0) {
            $('#home-projects').removeClass("all-cards");
            $('#project-cards').removeClass("all-cards");
            $('.project-card').removeClass("all-cards");
            $('#featured-project').removeClass("all-cards");
            $('#home-projects-label button').html("see all projects");
        } else {
            $('#home-projects').addClass("all-cards");
            $('#project-cards').addClass("all-cards");
            $('.project-card').addClass("all-cards");
            $('#featured-project').addClass("all-cards");
            $('#home-projects-label button').html("show featured project");
        }
    };

    componentDidMount() {
        fullpage('#fullpage', {
            //options here TODO: update license key
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling:true,
            navigation:true,
            navigationPosition: 'right',
            anchors:['home', 'projects', 'about'],
            navigationTooltips: ['home', 'projects', 'about'],
            showActiveTooltip: true,
        });
    }

    render(){

        const projects = this.props.route.data;

        return (
            <div>
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
                                <div>
                                    <ProjectCardDeck data={projects}></ProjectCardDeck>
                                    <div id="featured-project">
                                        <div>
                                            <h2>Featured Project</h2>
                                            <p>{projects[0].content[0].body}</p>
                                            <Link to={"/projects/" + projects[0].name}>
                                                <button type="button" className="serif">read more</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div id="home-projects-label">
                            <button type="button" className="big-button serif" onClick={() => {{this.showAllCards()}}}>see all projects</button>
                        </div> 
                    </div>
                    <div className="section">
                        <About> </About>
                    </div>
                </div>
                {/* <Banner/> */}
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