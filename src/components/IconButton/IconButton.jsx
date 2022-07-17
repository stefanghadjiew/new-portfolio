import React from 'react';
import styles from './styles.module.scss';

export const IconButton = ({
    icon,
    tooltip,
    onClick,
    darkTheme,
    disabled,
    style,
}) => {
    return (
        <button
            style={style}
            disabled={disabled}
            className={`${styles['button']} ${
                darkTheme
                    ? styles['button--dark-theme']
                    : styles['button--light-theme']
            } ${disabled ? styles['button--disabled'] : ''}`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};
