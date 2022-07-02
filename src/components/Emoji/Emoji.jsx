import React from 'react';
import styles from './styles.module.scss';

export const Emoji = ({ emoji, label }) => {
    return (
        <span
            className={styles['emoji']}
            role="img"
            aria-label={label ? label : 'emoji'}
            aria-hidden={label ? 'false' : 'true'}
        >
            {emoji}
        </span>
    );
};
