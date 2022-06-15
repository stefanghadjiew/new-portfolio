import React from 'react';
import styles from './styles.module.scss';

export const Divider = ({ width }) => {
    return <div style={{ width }} className={styles.divider} />;
};
