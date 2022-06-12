import React, { useId } from 'react';
import styles from './styles.module.scss';
import { HorizontalLayout } from '../../layouts';
import { SVG, Title } from 'components';

export const Section = ({ id = 'no--id', title, children }) => {
    const sectionId = `${id}-section--${useId()}`;

    return (
        <section id={sectionId} className={styles.section}>
            <HorizontalLayout>
                <div className={styles['section__left-side']} />
                <div
                    className={`${styles['section__right-side']} flex-column`}
                >
                    <Title text={title} />
                    <SVG />
                </div>
                <div className={styles['section__content']}>
                    {children}
                </div>
            </HorizontalLayout>
        </section>
    );
};
