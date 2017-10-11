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
        content: [
            {body:"Wander is a social networking site that I built in the Summer of 2017 for a "
                  + "web development course. Born out of my frustration with falling into a fairly "
                  + "consistent daily routine while living in a city with endless opportunities, "
                  + "wander uses the Google Place API to help users discover new places.",
                },
            {img:'wander/place-screen.png'
                },
            {head:'Data Model',
                img:'wander/design.png',
                body:'I began the process by establishing a set of domain objects and expressing '
                     + 'their relationships in the above uml diagram. I was sure to exercise all '
                     + 'typical data relationships in this process, such as:',
                list:['One to many relation: A user-created list has many places in it.',
                        'Many to many relation: A place has many visitors (users), and a user can visit multiple places.',
                        "Relation between users: Users can send and accept friend requests, to be able to view another's profile.",
                        'Relation between domain objects: A review belongs to a place.',
                        'Relation between users and domain objects: A user can write a new review, edit/delete existing ones.']
            },
            {head:'API Evaluation',
                img:'wander/api-eval.png',
                body:'Once I had my idea together, I evaluated my API to ensure that it was possible. '
                     + 'I created this proof of concept which may seem simple, but laid the foundation '
                     + 'for what was to come. I faced an unexpected challenge in that the calls to the '
                     + 'API had to come from my backend Express server, in order to be recognized by Google.'},
            {head:'User Roles',
                img:'wander/api-eval.png',
                body:'The site supports industry standard user roles, such as an admin who can access the '
                     + 'admin panel shown above which delivers frontend CRUD permission to domain objects. '
                     + 'Additionally, an anonymous role is supported so that users can browse the site before'
                     + 'deciding to create an account. Account creation can even be done with a Google account'
                     + 'to expedite the process.'},
            {   body: 'check out the full site here',
                link:'https://appleby-noah-webdev-project.herokuapp.com/'}]
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
        content: [{head:"This page is coming soon, apologies!"}]
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
        image: 'media/img/myCampus/preview.png',
        content: [{head:"This page is coming soon, apologies!"}]
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
        color: 'bright-red',
        icon: 'media/img/myHousing/logo.png',
        image: 'media/img/myHousing/preview.png',
        content: [{head:"This page is coming soon, apologies!"}]
    },
];

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} data={data}/>
        <Route path="/about" component={About}/>
        <Route path="/projects/:name" component={ProjectPage} data={data}/>
    </Router>,
    document.getElementById('container')
);