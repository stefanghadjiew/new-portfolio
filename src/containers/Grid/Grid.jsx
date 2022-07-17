import React from 'react';
import styles from './styles.module.scss';

export const Grid = ({ children, className }) => {
    return (
        <div className={[styles['grid'], className].join(' ')}>
            {children}
        </div>
    );
};
