import React from 'react';
import styles from './styles.module.scss';
import { Button, Card } from 'components';
import { Grid } from 'containers';
import { projects } from 'projects';

export const CardContainer = ({
    children,
    darkTheme,
    setOpenPortal,
    setBackdropComponent,
}) => {
    const projectCards = projects.map(project => (
        <Card
            key={project.id}
            title={project.title}
            darkTheme={darkTheme}
            backgroundImage={project.backgroundImage}
        />
    ));

    const backdropComponent = <Grid>{projectCards}</Grid>;

    return (
        <div className={styles['card-container']}>
            <div
                className={
                    styles['card-container__small-quadrant-top-right']
                }
            />
            <div
                className={`${styles['card-container__content']} flex-start`}
            >
                {children}
            </div>
            <div className={styles['card-container__left']} />
            <div className={styles['card-container__bottom']}>
                <Button
                    text="My Projects"
                    darkTheme={darkTheme}
                    onClick={() => {
                        setOpenPortal(true);
                        setBackdropComponent(backdropComponent);
                    }}
                />
            </div>
            <div
                className={
                    styles['card-container__large-quadrant-bottom-left']
                }
            />
            <div
                className={
                    styles['card-container__small-quadrant-bottom-left']
                }
            />
        </div>
    );
};
