import React from 'react';
import styles from './styles.module.scss';

export const Divider = ({
    width,
    margin,
    height,
    maxHeight,
    direction = 'horizontal',
}) => {
    return (
        <div
            style={{ width, margin, height, maxHeight }}
            className={`${styles.divider} ${
                direction === 'horizontal'
                    ? styles['divider--horizontal']
                    : styles['divider--vertical']
            }`}
        />
    );
};
