import React from 'react';
import styles from './styles.module.scss';
import { HorizontalLayout } from '../../layouts';
import { Title } from 'components';

export const Section = ({
    id = 'no--id',
    title,
    children,
    height,
    titleType = 'h1',
    darkTheme,
}) => {
    return (
        <section
            id={id}
            style={{ height }}
            className={`${styles.section} ${
                darkTheme && styles['section--dark-theme']
            }`}
        >
            <HorizontalLayout>
                <div className={styles['section__left-side']} />
                <div
                    className={`${styles['section__right-side']} flex-column `}
                >
                    <Title text={title} type={titleType} />
                </div>
                <main className={styles['section__content']}>
                    {children}
                </main>
            </HorizontalLayout>
        </section>
    );
};
