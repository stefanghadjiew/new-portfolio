import React from 'react';
import styles from './styles.module.scss';
import {
    FiChevronUp,
    FiChevronRight,
    FiChevronDown,
    FiChevronLeft,
} from 'react-icons/fi';

export const CustomLink = ({
    text,
    hrefId,
    darkTheme,
    svgDirection,
    onClick,
}) => {
    const determineSvgDirection = () => {
        switch (svgDirection) {
            case 'up':
                return <FiChevronUp />;
            case 'right':
                return <FiChevronRight />;
            case 'down':
                return <FiChevronDown />;
            case 'left':
                return <FiChevronLeft />;
            default:
                return null;
        }
    };

    return (
        <a
            href={hrefId}
            className={`${styles['link']} ${
                darkTheme
                    ? styles['link--dark-theme']
                    : styles['link--light-theme']
            }`}
        >
            <span>{text}</span>
            <div
                className={`${styles['icon__wrapper']} ${
                    darkTheme
                        ? styles['icon__wrapper--dark-theme']
                        : styles['icon__wrapper--light-theme']
                }`}
            >
                {determineSvgDirection()}
            </div>
        </a>
    );
};
