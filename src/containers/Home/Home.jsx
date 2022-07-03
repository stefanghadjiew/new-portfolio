import React from 'react';
import { Section, CardContainer } from 'containers';
import { Divider, Subtitle, BigTitle, CustomLink } from 'components';
import styles from './styles.module.scss';
import { AiFillPhone } from 'react-icons/ai';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { personalInfo } from 'personalInfo';
import { scrollToSection } from 'utils';

export const Home = ({
    darkTheme,
    setOpenPortal,
    setBackdropComponent,
}) => {
    return (
        <div className={styles.home}>
            <Section
                darkTheme={darkTheme}
                id="home-section"
                titleType="h2"
                title="Personal Portfolio"
                height="100vh"
            >
                <div className="full-container-height flex-center even-large-padding-x">
                    <CardContainer
                        setBackdropComponent={setBackdropComponent}
                        darkTheme={darkTheme}
                        setOpenPortal={setOpenPortal}
                        bottomChild={
                            <CustomLink
                                onClick={() => {
                                    scrollToSection({
                                        sectionId: 'projects-section',
                                    });
                                }}
                                text="My Projects"
                                darkTheme={darkTheme}
                                svgDirection="down"
                            />
                        }
                    >
                        <Subtitle text="Hi there, I am" emoji="👋" />
                        <BigTitle
                            style={{ padding: '.5rem 0' }}
                            text="Stefan Hadzhiev"
                        />
                        <Subtitle text="Frontend web developer" />
                        <Divider width="50%" />
                        <div className={styles.contacts}>
                            <div className={styles.email}>
                                <MdEmail
                                    className={
                                        darkTheme ? 'svg--dark-theme' : ''
                                    }
                                />{' '}
                                {personalInfo.email}
                            </div>
                            <div className={styles.phone}>
                                <AiFillPhone
                                    className={
                                        darkTheme ? 'svg--dark-theme' : ''
                                    }
                                />{' '}
                                {personalInfo.phone}
                            </div>
                            <div className={styles.location}>
                                <MdLocationOn
                                    className={
                                        darkTheme ? 'svg--dark-theme' : ''
                                    }
                                />{' '}
                                {personalInfo.location}
                            </div>
                        </div>
                    </CardContainer>
                </div>
            </Section>
        </div>
    );
};
