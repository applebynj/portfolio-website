import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectDetails extends Component {

    render() {
        const content = this.props.data;

        const contentNode = content.map((content) => {
            return (
                <section>
                    <h2>{content.head}</h2>
                    <p>{content.body}</p>
                    <img src= {'../media/img/' + content.img}/>
                </section>
            )
        });
        return (
            <div>
                <ul id="project-cards">
                    {contentNode}
                </ul>
            </div>
        );
    }
}

export default ProjectDetails