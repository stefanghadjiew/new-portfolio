import React from 'react';
import styles from './styles.module.scss';
import { useCurrentSectionInView } from 'hooks';
import { scrollToSection } from 'utils';

export const NavigationDots = ({ darkTheme }) => {
    const [currentSectionInViewId] = useCurrentSectionInView();

    const navigationSectionsIds = [
        'home-section',
        'about-section',
        'projects-section',
    ];

    const renderNavigationDots = navigationSectionsIds.map(
        (sid, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content

            //FIXME: replace <a> with <button> and fix styles
            <a
                /* href={sid} */
                onClick={() => {
                    scrollToSection({ sectionId: sid });
                }}
                key={sid + index}
                className={`${styles['navigation__dots-dot']} ${
                    darkTheme
                        ? styles['navigation__dots-dot--dark-theme']
                        : styles['navigation__dots-dot--light-theme']
                } ${
                    currentSectionInViewId === sid
                        ? styles['navigation__dots-dot--active']
                        : ''
                }`}
            />
        )
    );

    return (
        <div className={styles['navigation__dots']}>
            {renderNavigationDots}
        </div>
    );
};
