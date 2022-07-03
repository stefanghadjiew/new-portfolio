import React from 'react';
import styles from './styles.module.scss';
import {
    FiChevronUp,
    FiChevronRight,
    FiChevronDown,
    FiChevronLeft,
} from 'react-icons/fi';

//FIXME: rename component to ButtonSectionLink

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
        //FIXME: replace <a> with <button> and fix styles
        <a
            /* href={null} */
            onClick={onClick}
            className={`${styles['link']} ${
                darkTheme
                    ? styles['link--dark-theme']
                    : styles['link--light-theme']
            }`}
        >
            <span>{text}</span>
            <div
                className={`${styles['icon__wrapper']} ${styles['spin']} ${styles['circle']}`}
            >
                {determineSvgDirection()}
            </div>
        </a>
    );
};
