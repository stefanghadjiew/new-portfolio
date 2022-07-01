import React from 'react';
import { Section, CardContainer } from 'containers';
import { Paragraph, CustomLink } from 'components';
import { aboutMeSubtitle } from 'staticResources';

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
                            hrefId="#projects-section"
                            darkTheme={darkTheme}
                            svgDirection="right"
                        />
                    }
                >
                    <Paragraph text={aboutMeSubtitle} />
                </CardContainer>
            </div>
        </Section>
    );
};
