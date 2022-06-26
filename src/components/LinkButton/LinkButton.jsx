import React from 'react';
import styles from './styles.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const LinkButton = ({ text, onClick, darkTheme }) => {
    return (
        <div className={styles['link-button__wrapper']}>
            <FiChevronRight style={{ marginRight: '1rem' }} />
            <button
                className={`${styles['link-button']} ${
                    darkTheme
                        ? styles['link-button-dark-theme']
                        : styles['link-button-light-theme']
                }`}
                onClick={onClick}
            >
                {text}
            </button>
            <FiChevronLeft style={{ marginLeft: '1rem' }} />
        </div>
    );
};
