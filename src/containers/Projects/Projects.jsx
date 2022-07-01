import React from 'react';
import { Section, Grid } from 'containers';
import styles from './styles.module.scss';
import { Card } from 'components';
import { projects } from 'projects';

export const Projects = ({ darkTheme }) => {
    const projectCards = projects.map(project => (
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
                <div className={styles['content']}>
                    <div
                        className={`${styles['grid__wrapper']} ${
                            darkTheme
                                ? styles['grid__wrapper--dark-theme']
                                : ''
                        }`}
                    >
                        <Grid darkTheme={darkTheme}>{projectCards}</Grid>
                    </div>
                </div>
            </div>
        </Section>
    );
};
