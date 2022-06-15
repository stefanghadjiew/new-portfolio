import React from 'react';
import styles from './styles.module.scss';

export const CardContainer = ({ children }) => {
    return (
        <div className={styles['card-container']}>
            <div
                className={
                    styles['card-container__large-quadrant-top-right']
                }
            />
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
            <div className={styles['card-container__bottom']} />
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
