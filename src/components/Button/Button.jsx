import React from 'react';
import styles from './styles.module.scss';

export const Button = ({ text, onClick, darkTheme, style }) => {
    return (
        <div
            style={style}
            className={`${styles['button__wrapper']} ${
                darkTheme
                    ? styles['button__wrapper--dark-theme']
                    : styles['button__wrapper--light-theme']
            }`}
        >
            <button className={`${styles['button']}`} onClick={onClick}>
                {text}
            </button>
        </div>
    );
};
