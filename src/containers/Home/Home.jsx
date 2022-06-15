import React from 'react';
import { Section, CardContainer } from 'containers';
import { Divider, Subtitle, Title } from 'components';
import styles from './styles.module.scss';
import { AiFillPhone } from 'react-icons/ai';
import { MdLocationOn, MdEmail } from 'react-icons/md';

export const Home = () => {
    return (
        <div className={styles.home}>
            <Section
                id="home"
                titleType="h2"
                title="Personal Portfolio"
                height="100vh"
            >
                <div className="full-container-height flex-center large-padding-x">
                    <CardContainer>
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
                                    <MdEmail /> cheffo0odev@abv.bg
                                </div>
                                <div className={styles.phone}>
                                    <AiFillPhone /> +(359)899928238
                                </div>
                                <div className={styles.location}>
                                    <MdLocationOn /> Varna, BG
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                </div>
            </Section>
        </div>
    );
};
