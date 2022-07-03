import React from 'react';
import styles from './styles.module.scss';
import { renderTechnologiesIcons } from 'staticResources';

export const Technologies = () => {
    return (
        <div className={styles['technologies-wrapper']}>
            {renderTechnologiesIcons}
        </div>
    );
};
