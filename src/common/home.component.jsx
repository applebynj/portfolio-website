import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCardDeck from '../project/project-card-deck.component.jsx'
import Banner from './banner.component.jsx';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

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

        let options = {
            sectionClassName:     'section',
            anchors:              ['sectionOne', 'sectionTwo'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };

        return (
            <div>
                {<Header>
                    <section className="nav">
                        <Link
                            to={"/about"}>
                            more about me
                        </Link>
                    </section>
                    {/* <a href="#sectionOne">Section One</a>
                    <a href="#sectionTwo">Section Two</a> */}
                </Header>}
                <Footer>
                    <Banner/>
                </Footer>
                <SectionsContainer {...options}>
                    <Section> 
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
                    </Section>
                    <Section>
                        <div id="home-projects">
                            <ProjectCardDeck data={projects}></ProjectCardDeck>
                        </div>
                        <div id="home-projects-label">
                            <h4 className="serif">Pick a card, any card!</h4>
                            <button type="button" onClick={() => {{this.showAllCards()}}}>show all cards</button>
                        </div> 
                    </Section>
                </SectionsContainer>
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