import React from 'react';
import styles from './styles.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Button = ({ text, onClick, darkTheme }) => {
    return (
        <div className={styles['button-wrapper']}>
            <FiChevronRight style={{ marginRight: '1rem' }} />
            <button
                className={`${styles['button']} ${
                    darkTheme
                        ? styles['button-dark-theme']
                        : styles['button-light-theme']
                }`}
                onClick={onClick}
            >
                {text}
            </button>
            <FiChevronLeft style={{ marginLeft: '1rem' }} />
        </div>
    );
};
