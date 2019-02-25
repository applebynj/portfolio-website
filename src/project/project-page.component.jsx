import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectCard from './project-card.component.jsx';
import ProjectDetails from './project-details.component.jsx';

class ProjectPage extends Component {

    componentDidMount () {
        window.scrollTo(0, 0)
    }
    
    render(){
        const projects = this.props.route.data;
        //url param
        const name = this.props.params.name;

        const project = projects.filter(project => {
            if(project.name == name) {
                return project;
            }
        })[0];

        const nextProject = projects[projects.indexOf(project) - 1];
        const lastProject = projects[projects.indexOf(project) + 1];

        project.cardStyle = {};

    //     <section className="nav">
    //     <Link
    //         to={"/"}>
    //         back to projects
    //     </Link>
    // </section>

        return (
            <div>
                 <div id="nav">
                    <div className="border shadow">
                        <a id="nav-home" href="#home">01. HOME</a>
                        <a id="nav-projects" href="#projects">02. PROJECTS</a>
                        <a id="nav-about" href="#about">03. ABOUT</a>
                    </div>
                </div>
                <div className="site-container">
                <div id="project-details-card">
                    <div id="card-body">
                        {nextProject ?
                             <div id="next-project-card">
                                <ProjectCard  data={nextProject}/>
                             </div>
                            : null}
                        {lastProject ?
                         <div id="last-project-card">
                             <ProjectCard data={lastProject}/>
                         </div>
                            : null}
                        <ProjectCard data={project}/>

                    </div>
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
                </div>
        </div>
        );
    }
}

export default ProjectPage