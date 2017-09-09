import React, { Component } from 'react';
import { Link } from 'react-router';


class Project extends Component {
    render(){
        const projects = this.props.route.data;

        const projectNode = projects.map((project) => {
            return (
                <li>
                    <Link
                        to={"/projects/"+project.name}
                        className="list-group-item"
                        key={project.id}>
                        {project.name}
                    </Link>
                </li>
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