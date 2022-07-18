import React from 'react';
import styles from './styles.module.scss';
import { useCurrentSectionInView } from 'hooks';
import { scrollToSection } from 'utils';
import { IconButton } from 'components';
import {
    AiOutlineHome,
    AiOutlineContacts,
    AiOutlineProject,
} from 'react-icons/ai';
import { IoIosPerson } from 'react-icons/io';

//TODO: This component should be called Navbar -> NavigationDots will be the one for the carousel

export const Navigation = ({ darkTheme }) => {
    const [currentActiveSectionId, setCurrentSectionInViewId] =
        useCurrentSectionInView();

    const navigationSections = [
        {
            id: 'home-section',
            icon: (
                <AiOutlineHome
                    className={darkTheme && 'svg--dark-theme'}
                />
            ),
        },
        {
            id: 'about-section',
            icon: (
                <IoIosPerson className={darkTheme && 'svg--dark-theme'} />
            ),
        },
        {
            id: 'projects-section',
            icon: (
                <AiOutlineProject
                    className={darkTheme && 'svg--dark-theme'}
                />
            ),
        },
        {
            id: 'contacts-section',
            icon: (
                <AiOutlineContacts
                    className={darkTheme && 'svg--dark-theme'}
                />
            ),
        },
    ];

    const renderNavigationDots = navigationSections.map(
        navigationSection => (
            <li
                key={navigationSection.id}
                className={`${
                    currentActiveSectionId === navigationSection.id
                        ? styles['active']
                        : ''
                } `} //TODO: see if you can optimize this -> maybe assign the "active" class in the useCurrentSectionInView hook with refs, so that a 2nd loop through the sections is not needed
            >
                <IconButton
                    darkTheme={darkTheme}
                    icon={navigationSection.icon}
                    tooltip={navigationSection.tooltip}
                    onClick={() => {
                        if (
                            navigationSection.id === currentActiveSectionId
                        )
                            return;
                        setCurrentSectionInViewId(navigationSection.id);
                        scrollToSection({
                            sectionId: navigationSection.id,
                        });
                    }}
                />
            </li>
        )
    );

    return (
        <nav className={styles['navigation__dots']}>
            <ul>{renderNavigationDots}</ul>
        </nav>
    );
};
