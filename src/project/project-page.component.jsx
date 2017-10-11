import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCard from './project-card.component.jsx';
import ProjectDetails from './project-details.component.jsx';

class ProjectPage extends Component {
    render(){
        const projects = this.props.route.data;
        //url param
        const name = this.props.params.name;

        const project = projects.filter(project => {
            if(project.name == name) {
                return project;
            }
        })[0];

        project.cardStyle = {};

        return (
            <div className="site-container">
                <div id="project-details-card">
                    <ProjectCard data={project}/>
                    <div id="card-links">
                        {project.githubRepo && <a href={project.githubRepo} target="_blank"
                           className="fa fa-github" aria-hidden="true"></a>}
                        {project.liveLink && <a href={project.liveLink} target="_blank"
                           className="fa fa-external-link-square" aria-hidden="true"></a>}
                    </div>
                </div>

                <section id="project-details-page" className="gray-border-left">
                     <ProjectDetails data={project.content}></ProjectDetails>
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

export default ProjectPage