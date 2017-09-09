import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Import custom components
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Project from './project/project.component.jsx'
import ProjectDetail from './project/project-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'wander',
        type: 'social-network web app',
        date: 'Summer 2017',
        tags: ['MEAN Stack',
               'full-stack web development'],
        color: 'teal',
        icon: 'http://via.placeholder.com/50x50',
        image: 'http://via.placeholder.com/250x160'
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
        color: 'calm-green',
        icon: 'http://via.placeholder.com/50x50',
        image: 'http://via.placeholder.com/250x160'    },
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
        color: 'dull-red',
        icon: 'http://via.placeholder.com/50x50',
        image: 'http://via.placeholder.com/250x160'    },
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
        color: 'bright-red',
        icon: 'http://via.placeholder.com/50x50',
        image: 'http://via.placeholder.com/250x160'    },
];

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} data={data}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Project} data={data}/>
        <Route path="/projects/:name" component={ProjectDetail} data={data}/>
    </Router>,
    document.getElementById('container')
);