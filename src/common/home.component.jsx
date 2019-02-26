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
            $('#featured-project-info').removeClass("all-cards");
            $('#featured-project-header').html("ALL PROJECTS");
        } else {
            $('#home-projects').addClass("all-cards");
            $('#project-cards').addClass("all-cards");
            $('.project-card').addClass("all-cards");
            $('#featured-project-info').addClass("all-cards");
            $('#featured-project-header').html("ALL PROJECTS");
        }
    };

    componentDidMount() {
        fullpage('#fullpage', {
            //options here TODO: update license key
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling:true,
            // navigation:true,
            // navigationPosition: 'right',
            anchors:['home', 'projects', 'about'],
            navigationTooltips: ['home', 'projects', 'about'],
            showActiveTooltip: true,
            responsiveWidth: 768,
  
            //hide nav if on homepage
            afterLoad: function(origin, destination, direction){
                if(destination.index != 0){
                    $('#nav').fadeIn();
                    $('#nav-' + origin.anchor).removeClass("font-bold");
                    $('#nav-' + destination.anchor).addClass("font-bold");
                }else{
                    $('#nav').fadeOut();   
                }
            }
        });
    }

    render(){

        const projects = this.props.route.data;

        return (
            <div>
                <div id="nav" hidden>
                    <div className="border shadow">
                        <a id="nav-home" href="#home">01. HOME</a>
                        <a id="nav-projects" href="#projects">02. PROJECTS</a>
                        <a id="nav-about" href="#about">03. ABOUT</a>
                    </div>
                </div>
                <div id="fullpage">
                    <div className="section">
                        <section className="center-container">
                            <div id="home-hello" className="center">
                                <div id="home-hello-header" className="border shadow">  
                                    <h1>Hello!</h1>
                                    <h2 className="font-light">
                                        I'm Noah, a developer-designer with a passion for defining, building and evaluating user experiences. 
                                    </h2>
                                </div>
                                <div id="home-hello-body" className="border shadow">
                                    <div className="font-light">
                                        <p>
                                            Thanks for stopping by, I hope you enjoy taking a look at some of my work.
                                        </p>
                                        <p>
                                            I’m currently seeking internship opportunities for the summer, and will soon begin my search for a full-time gig; I graduate from Northeastern University in Spring 2020.
                                        </p>
                                        <p>
                                            If you have any questions, comments, or cat photos to share, you can reach me via <a href="mailto:appleby.n@husky.neu.edu">email</a> or find me on <a href="https://www.linkedin.com/in/noahappleby">linkedin</a>. 
                                        </p>
                                    </div>
                                    <ul>
                                        <div id="home-hello-body-nav-links">
                                            <li><a href="#projects">PROJECTS</a></li>
                                            <li><a href="#about">ABOUT</a></li>
                                        </div>
                                        <div>
                                            <li><a href="https://drive.google.com/open?id=0Bww7MJCUkyYJdEVqdmtwZDRzdFE"><button type="button">view resume →</button></a></li>
                                            <li><a href="mailto:appleby.n@husky.neu.edu"><button className="cta"  type="button">contact →</button></a></li>
                                        </div>
                                    </ul>
                                </div>
                                <a href="#projects" className="font-light">
                                    <div id="home-hello-next" className="border shadow">
                                            <div className="arrow-down"></div>
                                    </div>
                                </a>
                            </div>
                        </section>
                    </div>
                    <div className="section">
                        <div id="home-projects">
                            <div id="featured-project" className = "shadow">
                                <div id="featured-project-content" className="border">

                                    <ProjectCardDeck data={projects}></ProjectCardDeck>

                                    <div id="featured-project-info" className="font-light">
                                        <p>{projects[0].content[0].body}</p>
                                        <ul>
                                            <li><a href={"/projects/" + projects[0].name /*TODO: turn back to Link */}> 
                                                <button type="button">read more →</button>
                                            </a></li>
                                            <li>
                                                <button type="button" className="cta" onClick={() => {{this.showAllCards()}}}>all projects →</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="featured-project-header" className="border">
                                        FEATURED PROJECT
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <About> </About>
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