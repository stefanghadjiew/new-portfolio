import React from 'react';
import styles from './styles.module.scss';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IconButton } from 'components';
import { FaFacebookF } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import { GiMoon } from 'react-icons/gi';

export const Navbar = ({ darkTheme, changeTheme }) => {
    const buttons = [
        {
            id: 'github',
            icon: (
                <AiFillGithub className={darkTheme && 'svg--dark-theme'} />
            ),
            tooltip: 'Github',
        },
        {
            id: 'linkedIn',
            icon: (
                <AiFillLinkedin
                    className={darkTheme && 'svg--dark-theme'}
                />
            ),
            tooltip: 'LinkedIn',
        },
        {
            id: 'facebook',
            icon: (
                <FaFacebookF className={darkTheme && 'svg--dark-theme'} />
            ),
            tooltip: 'Facebook',
        },
        {
            id: 'theme',
            icon: darkTheme ? (
                <GiMoon className={darkTheme && 'svg--dark-theme'} />
            ) : (
                <BsFillSunFill
                    className={darkTheme && 'svg--dark-theme'}
                />
            ),
            tooltip: darkTheme ? 'Light theme' : 'Dark theme',
            onClick: changeTheme,
        },
    ];

    const renderButtons = buttons.map(btn => (
        <IconButton
            darkTheme={darkTheme}
            icon={btn.icon}
            key={btn.id}
            tooltip={btn.tooltip}
            onClick={btn.onClick}
        />
    ));

    return (
        <div
            className={`${styles['navbar']} ${
                darkTheme ? 'dark-theme' : 'light-theme'
            }`}
        >
            <div className={styles['navbar__buttons']}>
                {renderButtons}
            </div>
        </div>
    );
};
