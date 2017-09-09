import React, { Component } from 'react';
import { Link } from 'react-router';




class Project extends Component {
    render(){
        const projects = this.props.route.data;

        const projectNode = projects.map((project) => {
            var cardStyle = {
                transform: 'rotate(-' + (project.id - 1) * 10 + 'deg) translate(' + (project.id - 1) * -10 + 'px, 0%)',
                zIndex: - project.id,
                transformOrigin: '50% 100%'
            }
            return (
                <section className={'project-card card-' + project.color}
                         style={cardStyle}>
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
        });
        return (
            <div>
                <h1>Projects page</h1>
                <ul className="list-group">
                    {projectNode}
                </ul>
            </div>
        );
    }
}

export default Project