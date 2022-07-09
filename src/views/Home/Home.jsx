import React, { Fragment } from 'react';
import { Section, CardContainer } from 'containers';
import {
    Divider,
    Subtitle,
    BigTitle,
    CustomLink,
    ContactInfo,
} from 'components';
import { scrollToSection } from 'utils';

export const Home = ({
    darkTheme,
    setOpenPortal,
    setBackdropComponent,
}) => {
    return (
        <Fragment>
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
                        <div style={{ marginTop: '1.5rem' }}>
                            <ContactInfo darkTheme={darkTheme} />
                        </div>
                    </CardContainer>
                </div>
            </Section>
        </Fragment>
    );
};
