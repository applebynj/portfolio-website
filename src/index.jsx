import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import projectData from './project-data.js'
// Import custom components
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import ProjectPage from './project/project-page.component.jsx'

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} data={projectData}/>
        <Route path="/about" component={About}/>
        <Route path="/projects/:name" component={ProjectPage} data={projectData}/>
    </Router>,
    document.getElementById('container')
);