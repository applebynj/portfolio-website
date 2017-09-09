import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';

// Import custom components
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Project from './project/project.component.jsx'

render(
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/project" component={Project}/>
    </Router>,
    document.getElementById('container')
);