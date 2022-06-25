import React from 'react';
import styles from './styles.module.scss';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IconButton } from 'components';

export const Carousel = ({ children }) => {
    return (
        <div className={styles['carousel__wrapper']}>
            <div
                className={`${styles['carousel__navigation']} ${styles['carousel__navigation-left']} flex-center`}
            >
                <IconButton icon={<BsArrowLeft />} />
            </div>
            <div className={styles['carousel']}>{children}</div>
            <div
                className={`${styles['carousel__navigation']} ${styles['carousel__navigation-right']} flex-center`}
            >
                <IconButton icon={<BsArrowRight />} />
            </div>
        </div>
    );
};
