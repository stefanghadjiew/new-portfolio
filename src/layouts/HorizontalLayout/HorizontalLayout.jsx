import React from 'react';
import styles from './styles.module.scss';

export const HorizontalLayout = ({ children }) => {
    return <div className={styles.horizontal}>{children}</div>;
};
