import React from 'react';
import {
    Image,
    Title,
    Paragraph,
    Technologies,
    Subtitle,
    Button,
    IconButton,
} from 'components';
import { displayProjectsInfo, projects } from 'staticResources';
import styles from './styles.module.scss';
import { Grid, FlexContainer, Footer } from 'containers';
import { RiCloseLine } from 'react-icons/ri';
import { ImStarFull } from 'react-icons/im';

export const DisplayProject = ({
    project,
    darkTheme,
    setOpenPortal,
    setBackdropComponent,
}) => {
    const gridImages = Object.values(
        displayProjectsInfo.PersonalOrganizer.images.grid
    ).map((img, i) => <Image src={img} key={img + i} />);

    return (
        <section
            id="display-projects"
            className={`${styles['display-project']} dark-theme`}
        >
            <IconButton
                icon={<RiCloseLine style={{ color: 'white' }} />}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: '20px',
                }}
                onClick={() => {
                    setOpenPortal(false);
                    setBackdropComponent(null);
                    document.querySelector('body').style.overflow =
                        'visible';
                }}
            />
            <FlexContainer padding="0 0 5rem">
                <ImStarFull className="star" />
                <ImStarFull className="star" />
                <ImStarFull className="star" />
                <ImStarFull className="star" />
                <ImStarFull className="star" />
            </FlexContainer>
            <header>
                <Title
                    classes={['pb-5', 'pt-0']}
                    text={displayProjectsInfo.PersonalOrganizer.title}
                />
                <FlexContainer alignItems="center" padding="0 0 5rem">
                    <Button
                        style={{ width: '200px', marginRight: '3rem' }}
                        text="Live Preview"
                        darkTheme={darkTheme}
                    />
                    <Button
                        style={{ width: '200px' }}
                        text="Github"
                        darkTheme={darkTheme}
                    />
                </FlexContainer>
                <Subtitle
                    text="Technologies:"
                    style={{ paddingBottom: '5rem' }}
                />
                <FlexContainer alignItems="center" padding="0 0 5rem">
                    <Technologies
                        technologies={projects[0].technologies}
                    />
                </FlexContainer>
            </header>
            <main>
                <figure>
                    <Image
                        style={{ borderRadius: '.5rem' }}
                        src={
                            displayProjectsInfo.PersonalOrganizer.images
                                .resourcesPage
                        }
                    />
                </figure>
                <article className="pt-5 flex">
                    <Paragraph
                        classes={[styles['reason-paragraph'], 'mg-r-4']}
                        text={displayProjectsInfo.PersonalOrganizer.reason}
                    />

                    <aside>
                        <Image
                            style={{ borderRadius: '.5rem' }}
                            src={
                                displayProjectsInfo.PersonalOrganizer
                                    .images.darkTheme
                            }
                        />
                    </aside>
                </article>
                <article className="pt-5 flex-end">
                    <Paragraph
                        classes={['mg-0', styles['description-paragraph']]}
                        text={
                            displayProjectsInfo.PersonalOrganizer
                                .description
                        }
                    />
                </article>
                <Grid className="pt-5">{gridImages}</Grid>
            </main>
            <Footer classes={['flex-center', 'pt-5']} />
        </section>
    );
};
