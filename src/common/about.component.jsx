import React, { Component } from 'react';
import { Link } from 'react-router';
import Banner from './banner.component.jsx';

class About extends Component {

    componentDidMount() {
        $("#about-text").accordion();
    }
    render(){
        return (
            <div>
                <div className="site-container">
                    <div id="#about">
                        <section id="about-text" className="border shadow">
                                <h4 className="border">values</h4>
                                <div>
                                    <p className="font-regular">
                                        I’m a New England native in my fifth year of a Computer Science and Design degree at Northeastern University.
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
                                <h4 className="border">happening now</h4>
                                <div>
                                    <p className="font-regular">
                                        What am I up to currently?
                                    </p>
                                    <p className="font-light">
                                        After living outside of New England for the first time by spending my last semester in Seattle,
                                        I'm now back in Boston to wrap up my degree. In addition to classes, I'm working part-time as a
                                        developer/designer at <a href="https://junodesign.studio">Juno Design</a> and serving as a Project Lead
                                        at Northeastern's Student-Led Product Studio <a href="https://northeastern.edu/generate">Generate</a>. In the 
                                        meanwhile, I'm trying to soak up all I can of Boston in this possible final year here!
                                    </p>
                                </div>
                                {/* <h4 className="border">brief timeline</h4>
                                <div>
                                    <p className="font-regular">
                                        How have I spent the last 21 years?
                                    </p>
                                    <p className="font-light">
                                      See my resume for more details, but here's a quick glance at what I've been up to.
                                    </p>
                                </div> */}
                        </section>
                        <section id="about-media">
                            <img className = "border shadow" src="media/img/noah.jpg"/>
                            <div className="business-card border shadow">
                                <div className="business-card-content">
                                    <h2>Noah Appleby</h2>
                                    available May 2020<br/>
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