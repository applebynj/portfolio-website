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
        liveLink: 'https://appleby-noah-webdev-project.herokuapp.com/',
        githubRepo: 'https://github.com/applebynj/wander',
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
            {   body: "check out the repo's Github Wiki for more process info!",
                link:'https://appleby-noah-webdev-project.herokuapp.com/'},
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
                     + 'Additionally, an anonymous role is supported so that users can browse the site before '
                     + 'deciding to create an account. Account creation can even be done with a Google account '
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
        liveLink: 'http://meetinghabits.com/',
        content: [{body:'In the fall of 2016, I worked on a team of student developer and designers '
                        + 'to create a brand identity and website for MeetingHabits: a startup '
                        + 'focused on helping companies improve their unproductive meetings.'
        }, {
            img:'meetinghabits/mainpage.png',
        }, {
            head:'Developing Amongst Designers',
            body:'I was the sole developer on a team of five designers for this project, and this was '
                 + 'also my first major experience with front-end development. It was a challenge to '
                 + 'begin development so early on when our initial wireframes were first coming '
                 + 'together, but doing so was a vital step in ensuring that I had the time I needed '
                 + 'to pick up a plethora of new concepts before our deadline.'
        }, {
            head:"Our Tools",
            img:'meetinghabits/responsive.png',
            body:'Our client requested that we use Twitter Bootstrap, because as the founder and only '
                 + 'employee of his company, he wanted to be able to easily tweak the website after '
                 + 'our semester with him. With the experience I have today, I would have evaluated alternative '
                 + 'solutions further at this early stage. However, in the end Bootstrap made responsiveness '
                 + 'a breeze and was a good fit for the project. For our own convenience, we used Nunjucks '
                 + 'templates and Sass styling to simplify our workflow. All of these were new to me at the time, '
                 + 'but I worked closely with our Technical Director to master them and learned a valuable lesson '
                 + 'in reaching out for help that I carry with me to this day.'
        }, {
            head:'More Than a Developer',
            img:'meetinghabits/star.png',
            body:'We met with our client weekly, which gave me ample opportunity to be a part of design '
                 + 'conversations even as a developer. We used branding activities to abstract our brand '
                 + 'and tackle the challenge of seeming important, yet approachable. As a developer, I '
                 + 'was involved in the initial wire-framing process, and then shifted into development '
                 + "in parallel to my team's creation of high-fidelity wireframes."
        },{
            body:"check out our case study for more on the design process",
            link:"https://web.northeastern.edu/scout/project/mh/"
        }, {
            head:'A Simple Solution',
            img:'meetinghabits/calculator.png',
            body: "One of our client's stretch goals was an ROI Calculator on the site. This required "
                  + "a calculation based on user input, but also storage of user data for his purposes."
                  + "Rather than over-engineering a solution, I was able to use native Javascript to "
                  + "hook a form up to a product that our client was already comfortable with: Form Assembly."
                  + "This solution made it possible to fit this feature in to our project, and had the "
                  + "added benefit of allowing our client to configure email notifications for new responses."
        }, {   body: 'check out the full site here',
            link:'http://www.meetinghabits.com/'
        }]
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
        content: [{head:"This page is coming soon, my apologies!"
        },{body:"In the meantime, check out our final report and project website for this project here!",
            link:"http://www.ccs.neu.edu/home/applebynj/project/P9.html"
        }]
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
               'brand redesign'],
        color: 'bright-red',
        icon: 'media/img/myHousing/logo.png',
        image: 'media/img/myHousing/preview.png',
        liveLink: 'https://marvelapp.com/1j8i6d4',
        content: [{body: "In the Spring of 2016 I took an introductory course to the Design Thinking Process, "
                         + "which ignited my passion for design. As a final project, we were tasked with "
                         + "designing a solution to a frustrating user experience on our campus. My group "
                         + "chose the housing selection process at Northeastern."
            },
            {img:'myHousing/map-screen.png'
            },
            {head:'Empathize',
                img:'myHousing/data.png',
                body:'After deciding on an issue through casual interviews with our peers, we began '
                     + 'to collect mass data through an online survey sent out to our peers. This survey '
                     + 'collected demographics, facts about their housing situation, and their opinion '
                     + 'on it as well. We recieved 220 responses and reviewed this data to find special '
                     + 'cases whom we reached out to for an in-depth, in-person interview.'
            }, {head:'Define the Problem & Ideate',
                img:'myHousing/persona.png',
                body:'To digest all of this data, we identified four key situations that we saw in our data '
                     + "and created personas for them. We then organized our problems and generated 'how might "
                     + "we' statements, to which we brainstormed answers. Through sketching rough ideas "
                     + "individually, we generated a great amount of potential solutions."
            }, {head:'Prototype',
                img:'myHousing/lowfi-wireframe.png',
                body:'Next, we created low-fidelity prototypes of our proposed solution in order to '
                     + 'be able to test it on users. These prototypes lack any '
                     + 'brand or identity and focus simply on the interface, which allowed other group '
                     + 'members to work on the brand in parallel.'
            }, {head:'Final Interactive Prototype',
                img:'myHousing/highfi-wireframe.png',
                body:'Finally, we created high fidelity prototypes based around our established brand. '
                     + "We used Invision to bring this vision to life and make it 'clickable', and did "
                     + "final user testing and pain-point analysis to inform one final iteration."
            }, {   body: 'check out the interactive prototype here',
                link:'https://marvelapp.com/1j8i6d4'
            }]
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