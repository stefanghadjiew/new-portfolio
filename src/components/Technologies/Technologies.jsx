import React from 'react';
import styles from './styles.module.scss';
import { TechnologyCard } from 'components';

export const Technologies = ({ technologies, darkTheme, width }) => {
    return (
        <div style={{ width }} className={styles['technologies']}>
            {technologies.map((technology, i) => (
                <TechnologyCard
                    technology={technology}
                    key={technology.id}
                />
            ))}
        </div>
    );
};
