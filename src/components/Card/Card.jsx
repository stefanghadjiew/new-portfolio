import React from 'react';
import styles from './styles.module.scss';
import { Divider, Image, IconButton, Paragraph } from 'components';
import { projectActions } from 'staticResources';

export const Card = ({
    darkTheme,
    title,
    backgroundImage,
    onClickHandler,
}) => {
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
                darkTheme ? 'dark-theme' : ''
            }`}
            onClick={onClickHandler}
        >
            <div className={styles.card}>
                <Image src={backgroundImage} />
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
                <Divider width={'40%'} margin={'0 1rem 0 0'} />
                <Paragraph text={title} style={{ margin: 0 }} />
            </div>
        </div>
    );
};
