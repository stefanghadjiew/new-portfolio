import React from 'react';
import styles from './styles.module.scss';

export const Title = ({ text, type = 'h1', style }) => {
    return (
        <div style={style} className={styles.title}>
            {type === 'h1' ? <h1>{text}</h1> : <h2>{text}</h2>}
        </div>
    );
};
