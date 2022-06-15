import React from 'react';
import styles from './styles.module.scss';
import { AiFillHome, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdFileDownload } from 'react-icons/md';
import { IconButton } from 'components';
import { FaFacebookF } from 'react-icons/fa';

export const Navbar = () => {
    const buttons = [
        {
            id: 'home',
            icon: <AiFillHome />,
            tooltip: 'Home',
        },
        {
            id: 'github',
            icon: <AiFillGithub />,
            tooltip: 'Github',
        },
        {
            id: 'linkedIn',
            icon: <AiFillLinkedin />,
            tooltip: 'LinkedIn',
        },
        {
            id: 'resume',
            icon: <MdFileDownload />,
            tooltip: 'My resume',
        },
        {
            id: 'facebook',
            icon: <FaFacebookF />,
            tooltip: 'Facebook',
        },
    ];

    const renderButtons = buttons.map(btn => (
        <IconButton icon={btn.icon} key={btn.id} tooltip={btn.tooltip} />
    ));

    return (
        <div className={styles['navbar']}>
            <div className={styles['navbar__buttons']}>
                {renderButtons}
            </div>
        </div>
    );
};
