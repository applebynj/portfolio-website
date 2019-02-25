import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class ProjectCard extends Component {

    componentDidMount() {
        var $this = $(ReactDOM.findDOMNode(this));
        setTimeout(
            function()
            {$this.removeClass("preload"); //TODO: replace this with a sane approach
            }, 500);
    };

    mouseOver(id, project) {
            $('.project-card').not("#initial-card").hover(function() {
                if(id != 1) {
                    $(this).css('transform',
                                'rotate(-' + (id - 1) * 5 + 'deg) translate(' + (id - 1) * -50 + 'px, -100px)');
                } else {
                    $(this).css('transform',
                                'rotate(-' + (id - 1) * 5 + 'deg) translate(' + (id - 1) * -50 + 'px, 0px)');
                }
            }, function() {
                $(this).css('transform',
                            'rotate(-' + (id - 1) * 5 + 'deg) translate(' + (id - 1) * -50 + 'px, 0px)');
            });
    };

    render(){
        const project = this.props.data;

        return (
            <div className={'project-card card-' + project.color + ' preload'}
                     style={project.cardStyle} onMouseEnter = {() => { {this.mouseOver(project.id, project)}}}>
                <a /*TODO: turn back to Link once fullpage fixed */
                    href={"/projects/"+project.name}
                    className="list-group-item"
                    key={project.id}>
                    <div className="card-header">
                        <div className="card-header-icon">
                            <img src={project.icon}/>
                        </div>
                        <div className="card-header-text">
                            {project.name}
                        </div>
                    </div>
                    <div className="card-img">
                        <div style={{backgroundImage: 'url(' + project.image + ')'}}></div>
                    </div>
                    <div className="card-content font-light">
                        <table>
                            <tr>
                                <th>TYPE</th>
                                <td><p>{project.type}</p></td>
                            </tr>
                            <tr>
                                <th>DATE</th>
                                <td><p>{project.date}</p></td>
                            </tr>
                            <tr className="card-content-tags">
                                <th>TAGS</th>
                                <td><p>{project.tags.map((tag, i) => <span key={i}>
                                {!!i && ", "}
                                {tag}
                                </span> )}</p></td>
                            </tr>
                        </table>
                    </div>
                </a>
            </div>
        )
    }
}

export default ProjectCard