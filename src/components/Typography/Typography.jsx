import React from 'react';
import styles from './styles.module.scss';

export const BigTitle = ({ text, type = 'h1', style }) => {
    return (
        <div style={style} className={styles['big-title']}>
            {type === 'h1' ? <h1>{text}</h1> : <h2>{text}</h2>}
        </div>
    );
};

export const Title = ({ text, style }) => {
    return (
        <div style={style} className={styles.title}>
            <h2>{text}</h2>
        </div>
    );
};

export const Subtitle = ({ text, type = 'h3' }) => {
    return (
        <div className={styles.subtitle}>
            {type === 'h3' ? <h3>{text}</h3> : <h4>{text}</h4>}
        </div>
    );
};

export const Paragraph = ({ text }) => {
    return (
        <div className={styles.paragraph}>
            <p>{text}</p>
        </div>
    );
};
