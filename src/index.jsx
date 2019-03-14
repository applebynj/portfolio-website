import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import projectData from './project-data.js'
// Import custom components
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import ProjectPage from './project/project-page.component.jsx'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-79666400-1'); //Unique Google Analytics tracking number

function fireTracking() {
    ReactGA.pageview(window.location.href);
}

render(
    <Router history={browserHistory} onUpdate={fireTracking}>
        <Route path="/" component={Home} data={projectData}/>
        <Route path="/about" component={About}/>
        <Route path="/projects/:name" component={ProjectPage} data={projectData}/>
    </Router>,
    document.getElementById('container')
);