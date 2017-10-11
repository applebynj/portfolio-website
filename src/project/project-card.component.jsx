import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectCard extends Component {
    render(){
        const project = this.props.data;
        return (
            <section className={'project-card card-' + project.color}
                     style={project.cardStyle}>
                <Link
                    to={"/projects/"+project.name}
                    className="list-group-item"
                    key={project.id}>
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
                </Link>
            </section>
        )
    }
}

export default ProjectCard