import React from 'react';
import styles from './styles.module.scss';

export const NavigationDots = ({
    projects,
    currentProjectIndex,
    setCurrentProjectIndex,
}) => {
    return (
        <nav className={styles['navigation-dots']}>
            <ul className="flex">
                {projects.map((project, index) => (
                    <li
                        onClick={() => setCurrentProjectIndex(index)}
                        key={project.id}
                        className={`${styles['navigation-dots__dot']} ${
                            currentProjectIndex === index &&
                            styles['navigation-dots__dot--active']
                        }`}
                    ></li>
                ))}
            </ul>
        </nav>
    );
};
