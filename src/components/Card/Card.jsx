import React from 'react';
import styles from './styles.module.scss';
import { Divider, Image, IconButton } from 'components';
import { projects } from 'projects';
import { projectActions } from 'projectActions';

export const Card = ({ darkTheme, title, backgroundImage }) => {
    const currentProject = projects.filter(
        project => project.title === title
    )[0];

    const actions = projectActions(darkTheme);

    const renderActionsButtons = actions.map(action => (
        <IconButton
            darkTheme={darkTheme}
            icon={action.action.icon}
            key={action.action.id}
            tooltip={action.action.title}
            /* onClick={actionOnClickHandler} */
        />
    ));

    return (
        <div
            className={`${styles['card__wrapper']} ${
                darkTheme && styles['card__wrapper-dark-theme']
            }`}
        >
            <div
                className={`${styles['card__top-style']} ${
                    darkTheme && styles['card__top-style-dark-theme']
                }`}
            />
            <div className={styles.card}>
                <Image src={backgroundImage} />

                <div className={styles['card__content']}>
                    {currentProject.technologies}
                </div>
                <div className={styles['card__actions']}>
                    {renderActionsButtons}
                </div>
            </div>
            <div className={styles['card__bottom-tittle']}>
                <Divider width={'100px'} margin={'0 1rem 0 0'} />
                {title}
            </div>
        </div>
    );
};
