import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCard from './project-card.component.jsx';

class ProjectCardDeck extends Component {
    render(){
        const projects = this.props.data;

        const projectNode = projects.map((project) => {
            project.cardStyle = {
                transform: 'rotate(-' + (project.id - 1) * 5 + 'deg) translate(' + (project.id - 1) * -50 + 'px, 0%)',
                zIndex: (100 - project.id),
                transformOrigin: '50% 100%',
            };

            project.hover = {
                transform:'rotate(-' + (project.id - 1) * 5 + 'deg) translate(' + (project.id - 1) * -50 + 'px, 50px)',
            }

            return (
                <ProjectCard data={project} id={project.id==1 ? 'initial-card' : ''}/>
            )
        });
        return (
            <div>
                <ul id="project-cards">
                    {projectNode}
                </ul>
            </div>
        );
    }
}

export default ProjectCardDeck