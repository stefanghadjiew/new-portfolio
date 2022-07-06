import React from 'react';
import styles from './styles.module.scss';
import { Divider, Image, IconButton } from 'components';
import { projectActions, projects } from 'staticResources';

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
        <div className={styles['card__wrapper']}>
            <div className={styles.card}>
                <Image src={backgroundImage} />

                <div className={styles['card__content']}>
                    <div
                        className={`${
                            styles['card__content__technologies']
                        } ${
                            darkTheme
                                ? styles[
                                      'card__content-technologies--dark-theme'
                                  ]
                                : ''
                        }`}
                    >
                        {currentProject.technologies}
                    </div>
                </div>
                <div
                    className={`${styles['card__actions']} ${
                        darkTheme
                            ? styles['card__actions--dark-theme']
                            : ''
                    }`}
                >
                    {renderActionsButtons}
                </div>
            </div>
            <div className={styles['card__wrapper__bottom-tittle']}>
                <Divider width={'100px'} margin={'0 1rem 0 0'} />
                {title}
            </div>
        </div>
    );
};
