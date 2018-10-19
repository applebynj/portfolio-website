import React, { Component } from 'react';
import { Link } from 'react-router';
import Banner from './banner.component.jsx';

class About extends Component {
    render(){
        return (
            <div>
                <div className="site-container">
                    <section id="about-media">
                        <img src="media/img/noah.png"/>
                        <div className="business-card">
                            <div className="business-card-content">
                                <h2 className="serif">Noah Appleby</h2>
                                 available June 2019 - August 2019<br/>
                                <span className="font-light">appleby.n@husky.neu.edu</span><br/><br/>
                                <a href="https://drive.google.com/open?id=0Bww7MJCUkyYJdEVqdmtwZDRzdFE" target="_blank"
                                   className="font-bold resume">view resume</a>
                                <a href="https://www.github.com/applebynj" target="_blank"
                                   className="fa fa-github" aria-hidden="true"></a>
                                <a href="https://www.linkedin.com/in/noahappleby/" target="_blank"
                                    className="fa fa-linkedin" aria-hidden="true"></a>
                            </div>
                        </div>
                    </section>
                    <section id="about-text">
                        <div className="gray-border-left">
                            <p className="serif">
                                I’m a New England native in his fourth year of a Computer Science and Design major at Northeastern University.
                            </p>
                            <p className="font-light">
                                Whether it be by picking up a new framework or building a product for an industry I’ve never even heard of
                                (ideally both), I’m always up to learn something new. Then, before moving onto my next project, I treasure
                                the ability to take on the teacher role and share what I’ve learned with others. <br /> <br />

                                When I’m not working, you can find me spending money on video games that I won’t find the time to play,
                                meal-prepping, and visiting home to see my cats.
                            </p>
                        </div>
                        <div className="gray-border-left">
                            <p className="serif">
                                What am I up to?
                            </p>
                            <p className="font-light">
                                I just wrapped up my second co-op at ASICS Digital, and spent the summer going on a road trip 
                                from Boston to Chicago (with many stops in-between). I'm back in classes for the Fall now, and am 
                                acting as the lead of the design team for HackBeanpot. Next semester, I'm headed out west to take 
                                courses out at Northeastern's Seattle Campus!
                            </p>
                        </div>
                    </section>

                    <section className="nav">
                        <Link
                            to={"/"}>
                           back to projects
                        </Link>
                    </section>
                </div>
                <Banner/>
            </div>
        );
    }
}

export default About