import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCard from './project-card.component.jsx';

class ProjectCardDeck extends Component {


    notFiltered(category) {
        /*TODO import from project-data*/
        const CAT_DESIGN = 'design';
        const CAT_DEV = 'dev';
        const CAT_WRITING = 'writing';
        const CAT_DESIGN_DEV = 'design+dev';

        var filtered = false;
        const filters = this.props.filters;

        switch(category) {
            case CAT_DESIGN_DEV:
                return this.props.filters.designActive || this.props.filters.devActive; 
            case CAT_DEV:
                return this.props.filters.devActive; 
            case CAT_WRITING:
                return this.props.filters.writingActive; 
            case CAT_DESIGN:
                return this.props.filters.designActive; 
        }
    }



    render(){
        const projects = this.props.data;

        const deckStyle = {
            transform:  'translate(' + 200 + 'px, 0%)'
        }

        const projectNode = projects.map((project) => {
            if(project.id <= 4) {
                
                    project.cardStyle = {
                        transform: 'rotate(-' + (project.id - 1) * 5 + 'deg)' +
                                    'translate(' + (project.id - 1) * -50 + 'px, 0%)',
                        zIndex: (100 - project.id),
                        transformOrigin: '50% 100%',
                    };
            } 
            // else {
            //     project.cardStyle = {
            //         transform:  'rotate(-' + (project.id - 1) * 5 + 'deg)' +
            //                     'translate(' + (((project.id - 1) * -50) + (40 * (project.id - 4)))  + 'px, 0%)',
            //         zIndex: (100 - project.id),
            //         transformOrigin: '50% 100%',
            //     };
            // }


            project.hover = {
                transform:'rotate(-' + (project.id - 1) * 5 + 'deg) translate(' + (project.id - 1) * -50 + 'px, 50px)',
            }
            
            if(this.notFiltered(project.category)) {
                return (
                    <ProjectCard data={project} id={project.id==1 ? 'initial-card' : ''}/>
                )
            } 
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