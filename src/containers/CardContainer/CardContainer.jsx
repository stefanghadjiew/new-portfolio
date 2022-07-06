import React from 'react';
import styles from './styles.module.scss';

export const CardContainer = ({
    children,
    darkTheme,
    disableChildrenMargin = false,
    setOpenPortal,
    setBackdropComponent,
    bottomChild = null,
}) => {
    return (
        <div className={styles['card__container']}>
            <div
                className={
                    styles['card__container__small-quadrant-top-right']
                }
            />
            <div
                className={`${
                    styles['card__container__content']
                } flex-start ${
                    darkTheme
                        ? styles['card__container__content--dark-theme']
                        : ''
                }`}
            >
                <div
                    className={
                        !disableChildrenMargin ? 'block-mg-6-l' : ''
                    }
                >
                    {children}
                </div>
            </div>
            <div className={styles['card__container__left-element']} />
            <div className={styles['card__container__bottom-element']}>
                <div className={'full-container-width block-mg-6-l'}>
                    {bottomChild}
                </div>
            </div>
            <div
                className={
                    styles['card__container__large-quadrant-bottom-left']
                }
            />
            <div
                className={
                    styles['card__container__small-quadrant-bottom-left']
                }
            />
        </div>
    );
};
