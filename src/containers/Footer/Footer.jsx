import React from 'react';
import styles from './styles.module.scss';
import { Subtitle, Paragraph, Divider, ButtonLink } from 'components';
import { footerInfo } from 'staticResources';

export const Footer = ({ darkTheme }) => {
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
        <div
            id="footer"
            className={`${styles['footer-wrapper']} flex-center ${
                darkTheme ? 'dark-theme' : 'light-theme'
            }`}
        >
            <div className={styles['footer']}>
                <div className={styles['footer-inner-wrapper']}>
                    <div className={styles['footer__personal-details']}>
                        <Subtitle
                            style={{
                                fontWeight: 'bold',
                            }}
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
                            style={{
                                fontWeight: 'bold',
                                marginBottom: '3rem',
                            }}
                        />
                        <ul>{renderSitemap}</ul>
                    </div>
                    <div className={styles['footer__projects']}>
                        <Subtitle
                            text="Projects"
                            style={{
                                fontWeight: 'bold',
                                marginBottom: '3rem',
                            }}
                        />
                        <ul>{renderProjects}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
