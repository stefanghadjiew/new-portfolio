import React from 'react';
import styles from './styles.module.scss';

export const Divider = ({ width, margin }) => {
    return <div style={{ width, margin }} className={styles.divider} />;
};
