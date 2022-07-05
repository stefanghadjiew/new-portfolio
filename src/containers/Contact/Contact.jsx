import React from 'react';
import { Section, CardContainer, Form } from 'containers';
import { Divider, ContactInfo, Input } from 'components';
import styles from './styles.module.scss';
import { useInput } from 'hooks';

export const Contact = ({ darkTheme }) => {
    const name = useInput('');
    const email = useInput('');
    const message = useInput('');

    return (
        <Section
            darkTheme={darkTheme}
            id="contacts-section"
            titleType="h2"
            title="Contact"
            height="100vh"
        >
            <div className="full-container-height flex-center odd-large-padding-x">
                <CardContainer darkTheme={darkTheme}>
                    <div className={styles.contact}>
                        <div className={styles['contact__info']}>
                            <ContactInfo
                                darkTheme={darkTheme}
                                enableItemBackground={true}
                            />
                        </div>
                        <div className={styles['divider__wrapper']}>
                            <Divider
                                direction="vertical"
                                height="100%"
                                maxHeight="150px"
                                margin="0 4rem"
                            />
                        </div>
                        <div className={styles['form__wrapper']}>
                            <Form darkTheme={darkTheme}>
                                <Input type="text" label="First name:" />
                                <Input type="email" label="Email:" />

                                <div
                                    className={styles['textarea__wrapper']}
                                >
                                    <label htmlFor="textarea">
                                        Your message:
                                    </label>

                                    <textarea
                                        rows="6"
                                        cols="50"
                                        id="textarea"
                                        name="textarea"
                                    ></textarea>
                                </div>
                            </Form>
                        </div>
                    </div>
                </CardContainer>
            </div>
        </Section>
    );
};
