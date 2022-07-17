import React from 'react';
import styles from './styles.module.scss';

export const TechnologyCard = ({ technology }) => {
    return (
        <figure className={styles['technology-card']}>
            {technology.icon}
            <figcaption>
                <h3>Experience</h3>
                <p>{technology.experience}</p>
            </figcaption>
        </figure>
    );
};
