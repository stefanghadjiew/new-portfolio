import React from 'react';
import styles from './styles.module.scss';

export const IconButton = ({ icon, tooltip, onClick }) => {
    return (
        <button className={styles['button']} onClick={onClick}>
            {icon}
        </button>
    );
};
