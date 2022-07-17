import React from 'react';
import styles from './styles.module.scss';
import { Subtitle, Paragraph, Divider, ButtonLink } from 'components';
import { footerInfo } from 'staticResources';
import { assignClasses } from 'utils';

export const Footer = ({ classes = [] }) => {
    const renderSitemap = footerInfo.sitemap.sections.map(
        (section, index) => (
            <li key={section + index} style={{ padding: '.25rem 0' }}>
                <ButtonLink text={section} />
            </li>
        )
    );

    const renderProjects = footerInfo.projects.map((project, index) => (
        <li key={project + index} style={{ padding: '.25rem 0' }}>
            <ButtonLink text={project} />
        </li>
    ));

    return (
        <footer
            id="footer"
            className={[
                assignClasses(classes),
                `${styles['footer-wrapper']}`,
            ].join(' ')}
        >
            <div className={styles['footer']}>
                <div className={styles['footer-inner-wrapper']}>
                    <div className={styles['footer__personal-details']}>
                        <Subtitle
                            className="bold"
                            text="Stefan G. Hadzhiev"
                        />
                        <Divider width="100%" />
                        <Paragraph
                            text="Frontend Web developer and programming enthusiast"
                            style={{ margin: 0 }}
                        />
                        <div className={styles['all-rights']}>
                            <span>All rights reserved</span>
                            <span>© Stefan G. Hadzhiev 2022</span>
                        </div>
                    </div>
                    <div className={styles['footer__site-map']}>
                        <Subtitle
                            text="Sitemap"
                            classes={['bold', 'mg-b-3']}
                        />
                        <ul>{renderSitemap}</ul>
                    </div>
                    <div className={styles['footer__projects']}>
                        <Subtitle
                            text="Projects"
                            classes={['mg-b-3', 'bold']}
                        />
                        <menu>
                            <ul>{renderProjects}</ul>
                        </menu>
                    </div>
                </div>
            </div>
        </footer>
    );
};
