import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { IconButton } from 'components';
import { FiChevronUp } from 'react-icons/fi';

export const ScrollToTopButton = ({ darkTheme }) => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible, {
            passive: true,
        });
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, [visible]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            style={{ display: visible ? 'block' : 'none' }}
            className={`${styles['icon-button__container']} ${
                darkTheme
                    ? styles['icon-button__container--dark-theme']
                    : styles['icon-button__container--light-theme']
            }`}
        >
            <IconButton
                darkTheme={darkTheme}
                icon={
                    <FiChevronUp
                        id="scroll-to-top"
                        className={darkTheme && 'svg--dark-theme'}
                    />
                }
                onClick={scrollToTop}
                /* tooltip={} */
            />
        </div>
    );
};
