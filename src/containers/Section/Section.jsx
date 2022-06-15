import React, { useId } from 'react';
import styles from './styles.module.scss';
import { HorizontalLayout } from '../../layouts';
import { Title } from 'components';

export const Section = ({
    id = 'no--id',
    title,
    children,
    height,
    titleType = 'h1',
}) => {
    const sectionId = `${id}-section--${useId()}`;

    return (
        <section
            id={sectionId}
            style={{ height }}
            className={styles.section}
        >
            <HorizontalLayout>
                <div className={styles['section__left-side']} />
                <div
                    className={`${styles['section__right-side']} flex-column`}
                >
                    <Title text={title} type={titleType} />
                </div>
                <div className={styles['section__content']}>
                    {children}
                </div>
            </HorizontalLayout>
        </section>
    );
};
