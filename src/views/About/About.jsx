import React from 'react';
import { Section, CardContainer } from 'containers';
import { Paragraph, CustomLink } from 'components';
import { aboutMeSubtitle } from 'staticResources';
import { scrollToSection } from 'utils';

export const About = ({ darkTheme }) => {
    return (
        <Section
            darkTheme={darkTheme}
            id="about-section"
            titleType="h2"
            title="About"
            height="100vh"
        >
            <div className="full-container-height flex-center odd-large-padding-x">
                <CardContainer
                    darkTheme={darkTheme}
                    bottomChild={
                        <CustomLink
                            text="Read my full story"
                            onClick={() => {
                                scrollToSection({
                                    sectionId: 'projects-section',
                                });
                            }}
                            darkTheme={darkTheme}
                            svgDirection="right"
                        />
                    }
                >
                    <Paragraph text={aboutMeSubtitle} className="mg-r-4" />
                </CardContainer>
            </div>
        </Section>
    );
};
