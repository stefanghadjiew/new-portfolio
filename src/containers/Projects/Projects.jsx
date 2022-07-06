import React, { useState } from 'react';
import { Section, CardContainer, Carousel } from 'containers';

import { Card } from 'components';
import { projects } from 'staticResources';

export const Projects = ({ darkTheme }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handlePreviousClick = () => {
        if (currentProjectIndex === 0) return;
        setCurrentProjectIndex(currentProjectIndex - 1);
    };
    const handleNextClick = () => {
        if (currentProjectIndex === projects.length - 2) return;
        setCurrentProjectIndex(currentProjectIndex + 1);
    };

    const projectCards = projects
        .slice(currentProjectIndex, currentProjectIndex + 2)
        .map(project => (
            <Card
                key={project.id}
                title={project.title}
                darkTheme={darkTheme}
                backgroundImage={project.backgroundImage}
            />
        ));

    return (
        <Section
            darkTheme={darkTheme}
            id="projects-section"
            titleType="h2"
            title="Projects"
            height="100vh"
        >
            <div className="full-container-height flex-center even-large-padding-x">
                <CardContainer
                    darkTheme={darkTheme}
                    disableChildrenMargin={true}
                >
                    <Carousel
                        width="100%"
                        height="100%"
                        disablePreviousButton={currentProjectIndex === 0}
                        disableNextButton={
                            currentProjectIndex === projects.length - 2
                        }
                        previousButtonClickHandler={handlePreviousClick}
                        nextButtonClickHandler={handleNextClick}
                    >
                        {projectCards}
                    </Carousel>
                </CardContainer>
            </div>
        </Section>
    );
};
