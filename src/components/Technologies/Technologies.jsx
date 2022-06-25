import React from 'react';
import { technologiesIcons } from 'technologies';
import styles from './styles.module.scss';

export const Technologies = () => {
    return (
        <div className={styles['technologies-wrapper']}>
            {Object.values(technologiesIcons).map(t => t)}
        </div>
    );
};
