import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCard from './project-card.component.jsx';

class ProjectCardDeck extends Component {
    render(){
        const projects = this.props.data;

        const deckStyle = {
            transform:  'translate(' + ((projects.length - 1) * -50) / 2 + 'px, 0%)'
        }

        const projectNode = projects.map((project) => {
            if(project.id <= 4) {
                project.cardStyle = {
                    transform: 'rotate(-' + (project.id - 1) * 5 + 'deg)' +
                                'translate(' + (project.id - 1) * -50 + 'px, 0%)',
                    zIndex: (100 - project.id),
                    transformOrigin: '50% 100%',
                };
            } else {
                project.cardStyle = {
                    transform:  'rotate(-' + (project.id - 1) * 5 + 'deg)' +
                                'translate(' + (((project.id - 1) * -50) + (40 * (project.id - 4)))  + 'px, 0%)',
                    zIndex: (100 - project.id),
                    transformOrigin: '50% 100%',
                };
            }


            project.hover = {
                transform:'rotate(-' + (project.id - 1) * 5 + 'deg) translate(' + (project.id - 1) * -50 + 'px, 50px)',
            }

            return (
                <ProjectCard data={project} id={project.id==1 ? 'initial-card' : ''}/>
            )
        });
        return (
            <div id="project-cards"
                style = {deckStyle}>
                {projectNode}
            </div>
        );
    }
}

export default ProjectCardDeck