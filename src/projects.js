import { technologiesIcons } from 'technologies';
import { images } from './assests';

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
        ],
    },
];
