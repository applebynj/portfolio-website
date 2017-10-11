import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectDetails extends Component {

    render() {
        const content = this.props.data;

        const contentNode = content.map((content) => {

            var listContent = null;
            if (content.list) {
                listContent = content.list.map((listItem) => {
                        return (
                            <li>{listItem}</li>
                        )
                });
            }

            return (
                <section>
                    <h2>{content.head}</h2>
                    {content.img && <img src= {'../media/img/' + content.img}/>}
                    {content.link && <a href={content.link} target="_blank">{content.body}</a>}
                    {!content.link &&<p>{content.body}</p>}
                    {content.list && <ul>{listContent}</ul>}
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