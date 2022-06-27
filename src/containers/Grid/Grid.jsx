import React from 'react';
import styles from './styles.module.scss';

export const Grid = ({ children }) => {
    return (
        <div className={styles['grid__container']}>
            <div className={styles['grid']}>
                {children.map(child => (
                    <div className={styles['grid__item']}>{child}</div>
                ))}
            </div>
        </div>
    );
};
