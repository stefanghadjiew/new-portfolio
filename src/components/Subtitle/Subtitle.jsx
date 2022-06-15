import React from 'react';
import styles from './styles.module.scss';

export const Subtitle = ({ text, type = 'h3' }) => {
    return (
        <div className={styles.subtitle}>
            {type === 'h3' ? <h3>{text}</h3> : <h4>{text}</h4>}
        </div>
    );
};
