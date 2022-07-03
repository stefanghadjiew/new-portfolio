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

export const technologiesIcons = {
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

const projectTitles = {
    PersonalOrganizer: 'PersonalOrganizer',
    BudgetPlanner: 'Budget Planner',
    Photoverse: 'Photoverse',
    Portfolio: 'Portfolio',
};

export const projects = [
    {
        id: 1,
        title: projectTitles.PersonalOrganizer,
        backgroundImage: images.personalOrganizer,
        technologies: [
            technologiesIcons.CSS3,
            technologiesIcons.Cypress,
            technologiesIcons.ExpressJs,
            technologiesIcons.Jest,
            technologiesIcons.MongoDB,
            technologiesIcons.NodeJs,
            technologiesIcons.ReactJs,
            technologiesIcons.Javascript,
            technologiesIcons.Html,
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
