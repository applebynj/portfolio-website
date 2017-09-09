import React, { Component } from 'react';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount(){
        // Static data
        const data = [
            {
                id: 1,
                name: 'wander',
                type: 'social-network web app',
                date: 'Summer 2017',
                tags: ['MEAN Stack',
                       'full-stack web development'],
                icon: ''
            },
            {
                id: 2,
                name: 'MeetingHabits',
                type: 'marketing website',
                date: 'Fall 2016',
                tags: ['brand identity',
                       'website development',
                       'product UX',
                       'Bootstrap' ],
                icon: ''
            },
            {
                id: 3,
                name: 'myCampus',
                type: 'iOS application',
                date: 'Fall 2016',
                tags: ['Human Computer Interaction',
                       'Swift',
                       'iOS app development',
                       'user testing',
                       'usability studies',
                       'prototyping'],
                icon: ''
            },
            {
                id: 4,
                name: 'myHousing',
                type: 'website prototype',
                date: 'March 2016',
                tags: ['wire-framing',
                       'high-fidelity prototype',
                       'interactive prototype',
                       'Sketch',
                       'pain-point analysis',
                       'brand redesign',],
                icon: ''
            },
    ];
        this.setState({projects: data});
    }

    render(){
        const projectNode = this.state.projects.map((project) => {
            return (
                <li>
                    <a
                        href="#"
                        className="list-group-item"
                        key={project.id}>
                        {project.name}
                    </a>
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