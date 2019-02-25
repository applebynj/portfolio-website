import React, { Component } from 'react';
import { Link } from 'react-router';
import Banner from './banner.component.jsx';

class About extends Component {
    render(){
        return (
            <div>
                <div className="site-container">
                    <div id="#about">
                        <section id="about-text">
                                <div className="border shadow">
                                    <p className="font-regular">
                                        I’m a New England native in his third year of a Computer Science and Design major at Northeastern University.
                                    </p>
                                    <p className="font-light">
                                        Whether it be by picking up a new framework or diving into a new industry, I’m always up to learn something new. 
                                        With an interdisciplinary focus in tech and design, I value the positive impact that understanding other
                                        perspectives can have on team performance, team morale and customer satisfaction. As someone who likes to expose
                                        himself to new challenges and perspectives, I value mobility. However, I also understand the importance of mentorship
                                        and consider it to be an essential step to take before shifting my focus.  <br /> <br />

                                        When I’m not working, you're likely to find me either on a run, playing video games with friends, or spending way too 
                                        long at a grocery store and loving it.
                                    </p>
                                </div>
                                <div className="border shadow">
                                    <p className="font-regular">
                                        What am I up to?
                                    </p>
                                    <p className="font-light">
                                      For the first time in a while, I'm in classes for a second consecutive semester. I'm the only undergrad out on 
                                      Seattle's Northeastern campus, which means I'm living outside of New England for the first time ever!
                                      While I'm out here, I'm working in IT on campus to help with an expansion project and am still acting as the 
                                      Design Team Lead for HackBeanpot. I'm not yet sure what's up next– for now I'm enjoying a comparatively calm 
                                      day-to-day and exploring this new city, excited to see what opportunity I come across next!
                                    </p>
                                </div>
                        </section>
                        <section id="about-media">
                            <img className = "border shadow" src="media/img/noah.png"/>
                            <div className="business-card border shadow">
                                <div className="business-card-content">
                                    <h2 className="serif">Noah Appleby</h2>
                                    available January 2018 - August 2018<br/>
                                    <span className="font-light">appleby.n@husky.neu.edu</span><br/><br/>
                                    <a href="https://drive.google.com/open?id=0Bww7MJCUkyYJdEVqdmtwZDRzdFE"><button type="button" className="cta">view resume →</button></a>
                                    <a href="https://www.github.com/applebynj" target="_blank"
                                    className="fa fa-github" aria-hidden="true"></a>
                                    <a href="https://www.linkedin.com/in/noahappleby/" target="_blank"
                                        className="fa fa-linkedin" aria-hidden="true"></a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default About