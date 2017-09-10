import React, { Component } from 'react';
import { Link } from 'react-router';


class About extends Component {
    render(){
        return (
            <div className="site-container">

                <section id="about-media">
                    <img src="media/img/noah.png"/>
                    <div className="business-card">
                        <div className="business-card-content">
                            <h2 className="serif">Noah Appleby</h2>
                             available January 2018 - August 2018<br/>
                            <span className="font-light">appleby.n@husky.neu.edu</span><br/><br/>
                            <a href="media/NoahAppleby_Resume_Fall_2017.pdf" target="_blank"
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
                            I’m a New England native in his third year of a Computer Science and Design major at Northeastern University.
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
                            Along with my fall classes, I’m working as a developer/designer for both Scout Studio and HackBeanpot. After
                            completing my first co-op in mid-August, I spent my two week summer traveling out west (for the first time!!)
                            to explore Seattle and San Francisco.
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
        );
    }
}

export default About