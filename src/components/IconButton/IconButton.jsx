import React from 'react';
import styles from './styles.module.scss';

export const IconButton = ({ icon, tooltip, onClick, darkTheme }) => {
    return (
        <button
            className={`${styles['button']} ${
                darkTheme
                    ? styles['button--dark-theme']
                    : styles['button--light-theme']
            }`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};
