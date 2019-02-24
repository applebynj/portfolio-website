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
                            <div id="home-hello" className="center">
                                <div id="home-hello-header" className="border">  
                                    <h1>Hello!</h1>
                                    <h2 className="font-light">
                                        I'm Noah, a developer-designer with a passion for defining, building and evaluating user experiences. 
                                    </h2>
                                </div>
                                <div id="home-hello-body" className="border">
                                    <div>
                                        <p>
                                            Thanks for stopping by, I hope you enjoy taking a look at some of my work.
                                        </p>
                                        <p>
                                            I’m currently seeking internship opportunities for the summer, and will soon begin my search for a full-time gig; I graduate from Northeastern University in Spring 2020.
                                        </p>
                                        <p>
                                            If you have any questions, comments, or cat photos to share, you can reach me via <a>email</a> or find me on <a>linkedin</a>. 
                                        </p>
                                    </div>
                                    <ul>
                                        <div>
                                            <li><a>PROJECTS</a></li>
                                            <li><a>ABOUT</a></li>
                                        </div>
                                        <div>
                                            <li><button type="button" onClick={() => {{this.showAllCards()}}}>view resume →</button></li>
                                            <li><button type="button" className="cta" onClick={() => {{this.showAllCards()}}}>contact →</button></li>
                                        </div>
                                    </ul>
                                </div>
                                <div id="home-hello-next" className="border font-light">
                                    <div className="arrow-down left"></div>
                                    <div>SCROLL TO CONTINUE</div>
                                    <div className="arrow-down right"></div>
                                </div>
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