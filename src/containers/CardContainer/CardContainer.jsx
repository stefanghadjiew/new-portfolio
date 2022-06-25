import React from 'react';
import styles from './styles.module.scss';
import { Button, LinkButton } from 'components';

export const CardContainer = ({ children, darkTheme, setOpenPortal }) => {
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
                    onClick={() => setOpenPortal(true)}
                />
                {/* <LinkButton
                    text="My Projects"
                    darkTheme={darkTheme}
                    onClick={() => setOpenPortal(true)}
                /> */}
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
