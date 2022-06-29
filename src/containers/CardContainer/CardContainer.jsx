import React from 'react';
import styles from './styles.module.scss';
import { Button } from 'components';

export const CardContainer = ({
    children,
    darkTheme,
    setOpenPortal,
    setBackdropComponent,
}) => {
    return (
        <div className={styles['card-container']}>
            <div
                className={
                    styles['card-container__small-quadrant-top-right']
                }
            />
            <div
                className={`${
                    styles['card__container-content']
                } flex-start ${
                    darkTheme
                        ? styles['card__container-contet-dark-theme']
                        : ''
                }`}
            >
                {children}
            </div>
            <div className={styles['card-container__left']} />
            <div className={styles['card-container__bottom']}>
                <Button
                    text="My Projects"
                    darkTheme={darkTheme}
                    onClick={() => {
                        document
                            .getElementById('projects-section')
                            .scrollIntoView({ behavior: 'smooth' });
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
