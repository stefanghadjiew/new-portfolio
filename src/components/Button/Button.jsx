import React from 'react';
import styles from './styles.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Button = ({ text, onClick, darkTheme }) => {
    return (
        <div
            className={`${styles['button__wrapper']} ${
                darkTheme
                    ? styles['button__wrapper-dark-theme']
                    : styles['button__wrapper-light-theme']
            }`}
        >
            <FiChevronRight style={{ marginRight: '1rem' }} />
            <button className={`${styles['button']}`} onClick={onClick}>
                {text}
            </button>
            <FiChevronLeft style={{ marginLeft: '1rem' }} />
        </div>
    );
};
