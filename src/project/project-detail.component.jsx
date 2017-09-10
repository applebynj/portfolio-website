import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectDetail extends Component {
    render(){
        const projects = this.props.route.data;
        //url param
        const name = this.props.params.name;

        const project = projects.filter(project => {
            if(project.name == name) {
                return project;
            }
        })[0];

        var cardStyle = {
        };

        return (
            <div className="site-container">
                {/*Duplicated code, abstract this out*/}
                <section id="project-details-card">
                    <div className={'project-card card-' + project.color}
                             style={cardStyle}>
                        <div className="card-header">
                            <div className="card-header-icon">
                                <img src={project.icon}/>
                            </div>
                            <div className="card-header-text">
                                <div className="font-bold">{project.name}</div>
                                <div className="font-regular">{project.type}</div>
                                <div className="font-light">{project.date}</div>
                            </div>
                        </div>
                        <div className="card-content">
                            <img src={project.image}/>
                            <p className="font-light project-tags">
                                {project.tags.map((tag, i) => <span key={i}>
                                        {!!i && ", "}
                                    {tag}
                                        </span> )}
                            </p>
                        </div>
                    </div>
                </section>
                <section id="project-details-page" className="gray-border-left">
                    <h1 className="serif">Project detail pages coming soon!</h1>
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

export default ProjectDetail