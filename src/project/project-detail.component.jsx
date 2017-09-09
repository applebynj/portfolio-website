import React, { Component } from 'react';

class ProjectDetail extends Component {
    render(){
        const projects = this.props.route.data;
        //url param
        const name = this.props.params.name;
        // Filter car with ID
        const project = projects.filter(project => {
            if(project.name == name) {
                return project;
            }
        });

        return (
            <div>
                <h1>{project[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={project[0].icon} alt={project[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <ul>
                            <li><strong>Model</strong>: {project[0].type}</li>
                            <li><strong>Make</strong>: {project[0].date}</li>
                            <li><strong>Year</strong>: {project[0].tags}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectDetail