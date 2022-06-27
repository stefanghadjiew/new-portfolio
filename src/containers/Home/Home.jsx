import React from 'react';
import { Section, CardContainer } from 'containers';
import { Divider, Subtitle, Title, Technologies } from 'components';
import styles from './styles.module.scss';
import { AiFillPhone } from 'react-icons/ai';
import { MdLocationOn, MdEmail } from 'react-icons/md';

export const Home = ({
    darkTheme,
    setOpenPortal,
    setBackdropComponent,
}) => {
    const email = 'cheffo0odev@abv.bg';
    const phone = '+(359)899928238';
    const location = 'Varna, BG';

    return (
        <div className={styles.home}>
            <Section
                darkTheme={darkTheme}
                id="home"
                titleType="h2"
                title="Personal Portfolio"
                height="100vh"
            >
                <div className="full-container-height flex-center large-padding-x">
                    <CardContainer
                        setBackdropComponent={setBackdropComponent}
                        darkTheme={darkTheme}
                        setOpenPortal={setOpenPortal}
                    >
                        <div className="block-center">
                            <Subtitle text="Hi there, I am" />
                            <Title
                                style={{ padding: '.5rem 0' }}
                                text="Stefan Hadzhiev"
                            />
                            <Subtitle text="Frontend web developer" />
                            <Divider width="50%" />
                            <div className={styles.contacts}>
                                <div className={styles.email}>
                                    <MdEmail
                                        className={
                                            darkTheme
                                                ? 'svg-dark-theme'
                                                : ''
                                        }
                                    />{' '}
                                    {email}
                                </div>
                                <div className={styles.phone}>
                                    <AiFillPhone
                                        className={
                                            darkTheme
                                                ? 'svg-dark-theme'
                                                : ''
                                        }
                                    />{' '}
                                    {phone}
                                </div>
                                <div className={styles.location}>
                                    <MdLocationOn
                                        className={
                                            darkTheme
                                                ? 'svg-dark-theme'
                                                : ''
                                        }
                                    />{' '}
                                    {location}
                                </div>
                                <Technologies />
                            </div>
                        </div>
                    </CardContainer>
                </div>
            </Section>
        </div>
    );
};
