/* TODO: Replace with CMS */

const projectData = [
    {
        id: 1,
        name: 'Admithub',
        type: 'long-term consulting',
        date: 'Spring - Winter 2019',
        tags: ['web development',
               'print design',
               'info design',
               'project management'],
        color: 'admithub-purple',
        icon: 'media/img/Admithub/logo.png',
        image: 'media/img/Admithub/preview.png',
        liveLink: 'https://www.admithub.com/',
        content: [
            {body:"Since Spring 2019, I've been managing a retainer client relationship between Juno Design and a young tech company that "
                + "is changing the way universities recruit, enroll, and communicate students. On a weekly basis I've taken "
                + "on a variety of challenges, exercising my diverse skill set in design and development work while also building "
                + "my skills in management as I handle relationships with contractors for areas outside of it."},
                {img:'Admithub/before-after.png',},
                {body:'My main focus has been on web design and development, adding new content libraries to the site and '
                    + 'educating their team in how to use it. In addition, I have worked on:',
                list:['- Overhauling the homepage (shown above).',
                        '- Slide/presentation redesign and branding.',
                        "- Packaging design.",
                        '- Introducing illustrations into the brand.',
                        '- A brand refresh and accompanying style guide.',
                        '- Print design of guides, including infographics.']},
                {img:'Admithub/home.png'},
            ]
    },
    {
        id: 2,
        name: 'About Fresh',
        type: 'organization website',
        date: 'Summer 2018',
        tags: ['web development',
               'Wordpress',
               'client relations'],
        color: 'aboutfresh-green',
        icon: 'media/img/AboutFresh/logo.png',
        image: 'media/img/AboutFresh/preview.png',
        liveLink: 'https://www.aboutfresh.org/',
        content: [
            {body:"While working with Juno Design in the summer of 2018, I led development of a website to launch an organizational rebrand at AboutFresh, formerly known "
                + "as Freshtruck. This project involved collaboration with a designer and flexibility throughout the process "
                + "as we put a new brand into use. Additionally, I had the opportunity to present the final site to the client and "
                + "educate them on how to maintain it."},
                {img:'AboutFresh/before-after.png'},
                {img:'AboutFresh/home.png'},
            ]
    }, {
    id: 3,
        name: 'Go Local',
        type: 'branding and application',
        date: 'Fall 2018',
        tags: ['brand development',
               'mock-up creation',
               'content creation',
               'multi-medium'],
        color: 'go-local-yellow',
        icon: 'media/img/GoLocal/logo.png',
        image: 'media/img/GoLocal/preview.png',
        liveLink: 'https://devpost.com/software/switch-tell',
        githubRepo: 'https://github.com/ctlnwng/switch-n-tell/',
        content: [
            {body:"In the fall of 2018, I created a social-cause outreach campaign which calls on users to"
                + " consider the impact of convenience. Aiming to explore the impacts and ethics"
                + " of advancements in automation that I contribute to with my work in computer science, I asked my"
                + " audience to get to know their communities and become a part of them."},
            {img:'GoLocal/posters.png'},
            {body:"I pushed myself outside my comfort zone by using photography and illustration as key "
                + "brand components. These mediums expressed two qualities that are unique to local communities: "
                + "personalized service and hand-crafted appeal. Both of these qualities stand in strong contrast "
                + "to the abstract visuals common in convenience services."},
            /* series, system, context */
            {img:'GoLocal/signs.png'},
            {body:"Go Local is more than a brand, it's a series of interventions which guide users through "
                + "stages of awareness, action and representation. The signage modeled above interrupts "
                + "the experience of grocery shopping in order to encourage exploration; repositioning "
                + "the environment as a learning opportunity for kids."},
            /* finding a direction */
            {img:'GoLocal/collateral.png'},
            {body:"The campaign's identity acts as a direct call-to-action for its purpose. Therefore, brand collateral "
                + " such as the tote bag above enables simultaneous brand representation and user action through "
                + " the inclusion of a map insert."},
            /* pushing through discomfort */
            {img:'GoLocal/video.png'}
            ]
    },
    {
        id: 4,
        name: 'Watch Process',
        type: 'instructional diagram',
        date: 'Fall 2018',
        tags: ['info design',
                'process',
                'instruction',
                'diagram'],
        color: 'process-black',
        icon: 'media/img/Process/logo.png',
        image: 'media/img/Process/preview.png',
        liveLink: 'https://devpost.com/software/switch-tell',
        githubRepo: 'https://github.com/ctlnwng/switch-n-tell/',
        content: [
            {body:"In the fall of 2018, I designed a set of instructions detailing how to assemble a"
                + " classic wristwatch for an Information Design course. My goal was to use as little text "
                + " possible while still conveying the intricacies of the process."},
            {img:'Process/wristwatch.png'},
            ]
    },
    {
        id: 5,
        name: 'Switch & Tell',
        type: 'iOS AR Game',
        date: 'Fall 2018',
        tags: ['app development',
               'AR',
               'iOS',
               'hackathon project'],
        color: 'switch-tell-blue',
        icon: 'media/img/SwitchAndTell/logo.png',
        image: 'media/img/SwitchAndTell/preview.png',
        liveLink: 'https://devpost.com/software/switch-tell',
        githubRepo: 'https://github.com/ctlnwng/switch-n-tell/',
        content: [
            {body:"I attended Wellesley Hacks in November of 2018 and ~finally~ had the"
                + " opportunity to build an AR project with two friends of mine. More info"
                + " is coming here soon!"},
            {img:'SwitchAndTell/intro.jpg'},
            {body:"In the mean time, feel free to check out our Devpost listing for more info"
                +" and a video demo!",
                link:'https://devpost.com/software/switch-tell'},
            {img:'SwitchAndTell/screens.jpg'},
            {img:'SwitchAndTell/friends.jpg'}
            ]
    },
    {
        id: 6,
        name: 'HackBeanpot',
        type: 'organization rebranding',
        date: 'Spring + Fall 2018',
        tags: ['logo design',
               'web design',
               'print design',
               'team lead',
                'event planning'],
        color: 'hbp-teal',
        icon: 'media/img/HackBeanpot/logo.png',
        image: 'media/img/HackBeanpot/preview.png',
        liveLink: 'https://www.hackbeanpot.com/',
        content: [
            {body:"I'm currently leading the Design team of HackBeanpot, which is handling a complete rebrand "
                + "of everything we do! Stepping into a leadership role for this process has been an absolute joy. "
                + "I've continued to learn the power of mentorship, and how effective a leader who trusts in the "
                + "process they've created and the abilities of their team can really be."},
                {   img:'HackBeanpot/design-team.jpg',
                    body: "We're a small team of just three, each with responsibilities on other teams in the organization."
                    + " We definitely had our hands full this year, but we're proud of the foundation we've set."},
                {img:"HackBeanpot/activity.jpg",
                    body:"Our rebrand this year wasn't just a visual refresh. We started by establishing values which we"
                    + " worked with the entire organization to follow. With this being our seventh annual event, we decided"
                    + " that it was time to take what we called 'calculated risks'. Establishing core values and this attitude "
                    + " of encouragement to taking risks empowered other teams to innovate in ways we couldn't have imagined."
                    + " For example, we built the above individual activity to help hackers brainstorm their goals!"},
                {img:'HackBeanpot/brand-guide.png',
                body: "Establishing brand guidelines early, such as this example of color usage, has allowed us to "
                +   "build and roll-out the brand over time. We've prioritized maintaining transparency with the "
                +   "rest of the organization in order to help ease the transition."},
                {img:'HackBeanpot/social.png',
                body: "For example, our social team has been able to practice implementing the brand in progress, providing us "
                +   "valuable insight and in-turn helping shape the brand. By getting parts of the brand in front of our "
                +   "audience early, far ahead of the event, we have been able to fine-tune details with confidence."},
                {img:"HackBeanpot/site.png",
                body:"Here's a taste of our website before and after our refresh. Our major motivation in rebranding was to "
                +   "establish a more friendly brand, in line with our target audience of first time hackers. "
                +   "Therefore, we led with establishing brand values and a core identity across all five "
                +   "of our internal teams as a prerequisite to overhauling our visual identity."},
                {img:'HackBeanpot/team.jpg'},
                {body:"Check out our site!",
                link:'https://www.hackbeanpot.com/'}]
    },
    {
        id: 7,
        name: 'Everyday Boston',
        type: 'blog and marketing site',
        date: 'Fall 2017',
        tags: ['Wordpress',
               'web development',
               'web design',
               'design consultation'],
        color: 'calm-blue',
        icon: 'media/img/EverydayBoston/logo.png',
        image: 'media/img/EverydayBoston/preview.png',
        liveLink: 'https://www.everydayboston.org/',
        content: [
            {body:"In the fall of 2017, I joined an interdisciplinary team of five students with very different "
                  + "backgrounds: design, development, neuroscience, economics and entrepeneurship. Together, we "
                  + "worked with a local non-profit to redefine the role of their website; turning it from a "
                  + "standard blog into a combination marketing site and community-fostering tool. This required "
                  + "careful attention to audience and accessibility, along with an overhaul of their brand.",
                },
            {img:'EverydayBoston/home-screen.png'
                },
            {head:'Knowing Our Users', 
                body:'At the onset of our project, the final deliverable was undefined. We knew we\'d likely be '
                    + 'focused on overhauling the website, but we needed to first understand the purpose of this '
                    + 'website in regards to the larger organization. Our local Boston audience was very accessible to us, thus we were '
                    + 'able to survey a wide demographic of users. Additionally, we were able to '
                    + 'speak with a number of members of the organization to understand their relationship and feelings towards ' 
                    + 'the existing website.',
            },
            {head:'Creating a Common Language Through UX', 
                img:'EverydayBoston/site-map.png',
                body:'Identifying our team\'s lack of experience with developing for the web, early '
                     + 'on in our project I pushed for prioritization of design tools such as the above '
                     + 'site map to get us all speaking the same language. This was especially helpful '
                     + 'during our weekly client meetings, providing a tactile artifact to keep the conversation '
                     + 'grounded. Additionally, by establishing this skeleton early on, we were able '
                     + 'to visualize the website in the larger, end-to-end context of a user\'s experience '
                     + 'and provide high-level consultation on other projects that the organization had underway.',
            },
            {head:'Empathy > Efficiency',
                img:'EverydayBoston/team-learning.jpg',
                body:'Due to the varied background of the team, there was a knowledge barrier between '
                     + 'us regarding experience with design and development processes. We began meeting with our client in our first week '
                     + 'of team-formation, so we were challenged to tackle this barrier on the fly. Ultimately, '
                     + 'it encouraged the team to learn from each other in every way possible. Throughout the semester, we '
                     + 'ran internal team workshops on topics such as HTML, CSS and user testing. We prioritized developing '
                     + 'empathy over efficency, and didn\'t allow our varied backgrounds to silo us off.'},
            {head:'An "Expert" of the Unknown',
                img:'EverydayBoston/home-screen.png',
                body:'Juggling the roles of primary developer and design mentor was '
                    + 'especially difficult given my prior lack of experience with Wordpress and content management '
                    + 'systems as a whole. Tools such as our site map helped me be able to get an '
                    + 'early start on development, allowing me to spec out work early and be more confident in making '
                    + 'judgement calls on time estimates down the line regarding what was within our scope.'},
            {   body: 'check out the full site here',
                link:'https://www.everydayboston.org/'}]
    },
    {
        id: 8,
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
                img:'wander/admin-screen.png',
                body:'The site supports industry standard user roles, such as an admin who can access the '
                     + 'admin panel shown above which delivers frontend CRUD permission to domain objects. '
                     + 'Additionally, an anonymous role is supported so that users can browse the site before '
                     + 'deciding to create an account. Account creation can even be done with a Google account '
                     + 'to expedite the process.'},
            {   body: 'check out the full site here',
                link:'https://appleby-noah-webdev-project.herokuapp.com/'}]
    },
    {
        id: 9,
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
            img:'MeetingHabits/mainpage.png',
        }, {
            head:'Developing Amongst Designers',
            body:'I was the sole developer on a team of five designers for this project, and this was '
                 + 'also my first major experience with front-end development. It was a challenge to '
                 + 'begin development so early on when our initial wireframes were first coming '
                 + 'together, but doing so was a vital step in ensuring that I had the time I needed '
                 + 'to pick up a plethora of new concepts before our deadline.'
        }, {
            head:"Our Tools",
            img:'MeetingHabits/responsive.png',
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
            img:'MeetingHabits/star.png',
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
            img:'MeetingHabits/calculator.png',
            body: "One of our client's stretch goals was an ROI Calculator on the site. This required "
                  + "a calculation based on user input and storage of user data for our client to reference. "
                  + "Rather than over-engineering a solution, I was able to use native Javascript to "
                  + "hook a form up to a product that our client was already comfortable with: Form Assembly. "
                  + "This solution made it possible to fit this feature in to our project, and had the "
                  + "added benefit of allowing our client to configure email notifications for new responses. "
        }, {   body: 'check out the full site here',
            link:'http://www.meetinghabits.com/'
        }]
    },
    {
        id: 10,
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
        githubRepo: 'https://github.com/jocoio/MyCampus',
        content: [{body:"In the fall of 2016, I designed, developed and evaluated myCampus as a final "
                        + "project for a course in Human Computer Interaction. It is a prototype for "
                        + "an iOS app that aims to help students discover on-campus Facebook events."
        }, {img:'myCampus/main-screen.png'
        }, { head:'Evaluation as an Ongoing Process',
            img:'myCampus/paper-proto.png',
            body:'The design process for this app was ongoing throughout our various forms '
                 + 'of prototyping. We began by brainstorming user tasks and specific persona scenarios '
                 + 'for those tasks. These scenarios gave us a basis for our user flows, from which '
                 + 'we created our initial paper prototypes. Our usability testing began with these '
                 + 'early prototypes; we tested users by having them complete various tasks and collected '
                 + 'both quantitative and qualitative observations of their process. The insights from this '
                 + 'stage of testing were extremely valuable as we had not yet begun development, therefore '
                 + 'they were much quicker to fix.'
        }, { head:'Keeping it Consistent',
            img:'myCampus/discover.png',
            body:"By keeping our initial prototypes low-fidelity, we were able to let our user's experience "
                 + 'guide our design process. A great example of this is our discover page, which served to '
                 + 'group events by type and allow a user to browse. In our original paper prototype, we '
                 + 'had image placeholders for each type; this confused users as they thought the image '
                 + 'would reference a specific event. In our next iteration, we developed an icon system '
                 + 'for different event types, which were also present in every event listing. This developed '
                 + 'a system of internal consistency within our app, as we were able to train users to '
                 + 'understand what the different event-types were across all pages, not just discover.'
        }, { head:'Implementation in Swift',
            img:'myCampus/storyboard.png',
            body:"While it wasn't required for our project, we decided to build our prototype using Swift "
                 + "in order to create a more realistic test environment for our users. Also, we were simply "
                 + "interested in gaining exposure to mobile development, as none of us had any prior experience. "
                 + "However, we were able to put our understanding of the MVC pattern to work and had surprisingly "
                 + "little trouble grappling with a new language and environment in XCode. Each page has a corresponding "
                 + "view and controller, (as do some shared components, such as an 'Event Table'), and they all share a "
                 + "common model. This model lived in memory and was composed of placeholder data as this was still only "
                 + "a prototype, but one that allowed much more freedom on our user's end than a typical paper prototype. "
                 + "This was important to us in testing as it gave our users freedom to accomplish "
                 + "tasks in a multitude of ways, they weren't locked to one path."
        },{body:"check out our final report and process website here",
                link:"http://www.ccs.neu.edu/home/applebynj/project/P9.html"
        }]
    },
    {
        id: 11,
        name: 'myHousing',
        type: 'website prototype',
        date: 'Spring 2016',
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

export default projectData