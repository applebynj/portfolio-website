import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Import custom components
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import ProjectPage from './project/project-page.component.jsx'

const data = [
    {
        id: 1,
        name: 'wander',
        type: 'social-network web app',
        date: 'Summer 2017',
        tags: ['MEAN Stack',
               'full-stack web development'],
        color: 'teal',
        icon: 'media/img/wander/logo.png',
        image: 'media/img/wander/preview.png',
        content: [{head: 'Test', body:'testing testing testing blah blah blah', img:'MeetingHabits/logo.png'},
            {head:'test', body:'test', img:'MeetingHabits/logo.png'},
            {head:'test', body:'test', img:'MeetingHabits/logo.png'},
            {head:'test', body:'test', img:'MeetingHabits/logo.png'}]
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
        icon: 'media/img/MeetingHabits/logo.png',
        image: 'media/img/MeetingHabits/preview.png',
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
        color: 'dull-red',
        icon: 'media/img/myCampus/logo.png',
        image: 'media/img/myCampus/preview.png'    },
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
        icon: 'media/img/myHousing/logo.png',
        image: 'media/img/myHousing/preview.png'    },
];

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} data={data}/>
        <Route path="/about" component={About}/>
        <Route path="/projects/:name" component={ProjectPage} data={data}/>
    </Router>,
    document.getElementById('container')
);