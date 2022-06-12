import React from 'react';
import styles from './styles.module.scss';

export const VerticalLayout = ({ children }) => {
    return <div className={styles.vertical}>{children}</div>;
};
