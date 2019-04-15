import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectDetails extends Component {

    componentDidMount() {
        /* Load content already on screen*/
        fadeContent();

        /* Continue to load content on screen, on every scroll*/
        $(window).scroll( function(){
            fadeContent();
        });
    };

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }



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
                    {content.head && <h2 className="hide-me">{content.head}</h2>}
                    {content.link && <div className="img-link"><a className="hide-me" href={content.link} target="_blank">
                    {content.img && <img className="hide-me" src= {'../media/img/' + content.img}/>}
                    {content.link && content.body}</a></div>}
                    {!content.link && content.img && <img className="hide-me" src= {'../media/img/' + content.img}/>}
                    {!content.link &&<p className="hide-me">{content.body}</p>}
                    {content.list && <ul className="hide-me">{listContent}</ul>}
                </section>
            )
        });
        return (
            <div>
                <ul id="project-details">
                    {contentNode}
                </ul>
            </div>
        );
    }
}

function fadeContent() {
    /* Check every element that is initially hidden via opacity */
    $('.hide-me').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height() * (7/8);

        /* Is this element on the screen? (plus a margin at bottom) Show it. */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1', top: '0px'}, 750);
        }
    });
}

export default ProjectDetails