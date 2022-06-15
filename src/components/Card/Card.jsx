import React from 'react';
import styles from './styles.module.scss';

export const Card = () => {
    return (
        <div className={styles['card__wrapper']}>
            <div className={styles.card}>
                <div className={styles['card__header']}></div>
                <div className={styles['card__content']}></div>
                <div className={styles['card__actions']}></div>
            </div>
        </div>
    );
};
