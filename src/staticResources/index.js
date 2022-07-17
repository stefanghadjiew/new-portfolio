import { AiFillGithub } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';
import { MdPreview } from 'react-icons/md';
import { images } from '../assests';
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import {
    SiMongodb,
    SiExpress,
    SiMaterialui,
    SiCss3,
    SiJavascript,
    SiCypress,
    SiJest,
    SiHtml5,
} from 'react-icons/si';

const { personalOrganizerImages } = images;

const technologiesIcons = {
    ReactJs: <FaReact className="icon react" />,
    NodeJs: <FaNodeJs className="icon node" />,
    MongoDB: <SiMongodb className="icon mongo" />,
    ExpressJs: <SiExpress className="icon express" />,
    SASS: <FaSass className="icon sass" />,
    MUI: <SiMaterialui className="icon mui" />,
    CSS3: <SiCss3 className="icon css" />,
    Javascript: <SiJavascript className="icon js" />,
    Cypress: <SiCypress className="icon cypress" />,
    Jest: <SiJest className="icon jest" />,
    Html: <SiHtml5 className="icon html" />,
};

export const experience = {
    ReactJs: '3+ Years working',
    NodeJs: '2+ Years personal',
    MongoDB: '2+ Years personal',
    ExpressJs: '2+ Years personal',
    SASS: '2+ Years working',
    MUI: '2+ Years working',
    CSS3: '3+ Years working',
    Javascript: '3+ Years working',
    Cypress: '2+ Years working',
    Jest: '1 Year personal',
    Html: '3+ Years working',
};

const projectTitles = {
    PersonalOrganizer: 'Personal Organizer',
    BudgetPlanner: 'Budget Planner',
    Photoverse: 'Photoverse',
    Portfolio: 'Portfolio',
    ChatApp: 'Chat App',
    MovieApp: 'Movie App',
    DietExercises: 'Diet&Exercises',
    Game: 'Game',
};

export const projects = [
    {
        id: 1,
        title: projectTitles.PersonalOrganizer,
        backgroundImage: images.personalOrganizer,
        technologies: [
            {
                id: 1,
                icon: technologiesIcons.CSS3,
                experience: experience.CSS3,
            },
            {
                id: 2,
                icon: technologiesIcons.Cypress,
                experience: experience.Cypress,
            },
            {
                id: 3,
                icon: technologiesIcons.ExpressJs,
                experience: experience.ExpressJs,
            },
            {
                id: 4,
                icon: technologiesIcons.Jest,
                experience: experience.Jest,
            },
            {
                id: 5,
                icon: technologiesIcons.MongoDB,
                experience: experience.MongoDB,
            },
            {
                id: 6,
                icon: technologiesIcons.NodeJs,
                experience: experience.NodeJs,
            },
            {
                id: 7,
                icon: technologiesIcons.ReactJs,
                experience: experience.ReactJs,
            },
            {
                id: 8,
                icon: technologiesIcons.Javascript,
                experience: experience.Javascript,
            },
            {
                id: 9,
                icon: technologiesIcons.Html,
                experience: experience.Html,
            },
        ],
    },
    {
        id: 2,
        title: projectTitles.BudgetPlanner,
        backgroundImage: images.budgetPlanner,
        technologies: [
            technologiesIcons.MUI,
            technologiesIcons.Cypress,
            technologiesIcons.ExpressJs,
            technologiesIcons.Javascript,
            technologiesIcons.ReactJs,
            technologiesIcons.Jest,
            technologiesIcons.MongoDB,
            technologiesIcons.NodeJs,
            technologiesIcons.Html,
        ],
    },
    {
        id: 3,
        title: projectTitles.Photoverse,
        backgroundImage: images.photoverse,
        technologies: [
            technologiesIcons.MUI,
            technologiesIcons.Cypress,
            technologiesIcons.ExpressJs,
            technologiesIcons.Javascript,
            technologiesIcons.ReactJs,
            technologiesIcons.Jest,
            technologiesIcons.NodeJs,
            technologiesIcons.Html,
        ],
    },
    {
        id: 4,
        title: projectTitles.Portfolio,
        backgroundImage: images.photoverse,
        technologies: [
            technologiesIcons.Javascript,
            technologiesIcons.ReactJs,
            technologiesIcons.SASS,
            technologiesIcons.Html,
        ],
    },
];

export const projectActions = darkTheme => [
    {
        action: {
            id: 1,
            title: 'Details',
            icon: (
                <CgDetailsMore
                    className={darkTheme && 'svg--dark-theme'}
                />
            ),
        },
    },
    {
        action: {
            id: 2,
            title: 'Github',
            icon: (
                <AiFillGithub className={darkTheme && 'svg--dark-theme'} />
            ),
        },
    },
    {
        action: {
            id: 3,
            title: 'Preview',
            icon: <MdPreview className={darkTheme && 'svg--dark-theme'} />,
        },
    },
];

export const githubRepositories = {
    PersonalOrganizer: '',
    BudgetPlanner: '',
    Portfolio: '',
    Photoverse: '',
};

export const personalInfo = {
    email: 'cheffo0odev@abv.bg',
    phone: '+(359)899928238',
    location: 'Varna, BG',
};

let wrappedIcons = [];

for (const icon in technologiesIcons) {
    wrappedIcons.push(
        <div className="circle-icon__wrapper">
            {technologiesIcons[icon]}
        </div>
    );
}

export const renderTechnologiesIcons = wrappedIcons;

export const aboutMeSubtitle = `I started my coding adventure at the end of 2018. I'm self-taught and obsessed... I want to become a Javascript expert 💪, so I spent and still spend countless hours in coding, reading, learning and enriching the acquired skills 🤓. Besides my professional commitments, I still spend every evening working on my own projects(yes,even the weekends 😎). My poison of choice is React - a very good friend of mine, skilled developer, was helping me with my first steps, and suggested that whenever I finish with HTML,CSS and Javascript to switch to React. And so I did. Loved every moment, and there were obstacles along the way...many obstacles. There is still a lot to learn, but this is exactly what I like most about this profession - the never ending journey of the student 👨‍🎓.`;

export const footerInfo = {
    sitemap: {
        sections: ['Home', 'About', 'Projects', 'Contact'],
    },
    projects: [
        projectTitles.PersonalOrganizer,
        projectTitles.BudgetPlanner,
        projectTitles.Photoverse,
        projectTitles.ChatApp,
        projectTitles.MovieApp,
        projectTitles.DietExercises,
        projectTitles.Game,
    ],
};

export const displayProjectsInfo = {
    PersonalOrganizer: {
        title: projectTitles.PersonalOrganizer,
        images: personalOrganizerImages,
        reason: 'This is one of the projects that I created for personal use. I like to learn and there is just too much information about any topic. It was hard for me to have articles,videos or blogs open in many browser windows so that I can read/watch them when I have the time. On many occasions, due to different reasons, I might find something well structured and explained, but than after some time I want to re-visit the topic and am unable to recall where I found it in the first place. So the problem that I tried to solve for myself - create a personal collection of useful resources on different topics, so that I can re-visit at any point in time. Structured, personalized and easy to use -> build my knowledge on my own paste and time 🥳',
        description:
            'The project is created with the MERN stack. It has user authentication/authorization with JWT`s(implementig Google login aswell). The Express application linked to mongoDB database serves data to the React application. The route for creating a new resource utilizes a link-preview-generator package for creating a link preview for each url provided by the client. It is not always possible,but a fallback mechanism is implemented -> if the request fails with specifically provided error message, the create-resource dialog provides the client with the opportunity to type all the necessary information by hand. Caching mechanism is implemented for the Express application. Error handling for all unsuccessful scenarios that I was capable of thinking -> both on the frontend and the backend. Input sanitization, search and enable/disable buttons based on met requirements for inputs, light and dark theme, pagination (only on the frontend) with possibility to choose number of resources being displayed, Video player for video resources , fully responsive, 404 Page. React Context for state management. E2E tests with Cypress + integration tests with Jest and React testing library. All routes (client) basically display the same page with the exception of the Projects page, which was also the most fun and challenging to create. It is like a very tiny Jira -> a user can create a Project and add Tasks and Subtasks, which can be marked as done after they are finished. Every Task/Subtask can also be given one or more Tags, marking their type(bug, improvement, test), status (in progress, investigate, up next etc...) or priority (high priority, blocker) 🔥',
        finalThoughts: '',
    },
};
