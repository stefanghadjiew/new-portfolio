import React from 'react';
import styles from './styles.module.scss';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IconButton } from 'components';
import { NavigationDots } from './NavigationDots';
import { projects } from 'staticResources';

export const Carousel = ({
    children,
    width,
    height,
    previousButtonClickHandler,
    nextButtonClickHandler,
    disablePreviousButton,
    disableNextButton,
    currentProjectIndex,
    setCurrentProjectIndex,
}) => {
    return (
        <div
            style={{ width, height }}
            className={styles['carousel__wrapper']}
        >
            <div
                className={`${styles['carousel__navigation']} ${styles['carousel__navigation--left']} flex-center`}
            >
                <IconButton
                    disabled={disablePreviousButton}
                    icon={
                        <BsArrowLeft
                            onClick={previousButtonClickHandler}
                        />
                    }
                />
            </div>
            <div className={styles['carousel']}>{children}</div>
            <div
                className={`${styles['carousel__navigation']} ${styles['carousel__navigation--right']} flex-center`}
            >
                <IconButton
                    disabled={disableNextButton}
                    icon={<BsArrowRight />}
                    onClick={nextButtonClickHandler}
                />
            </div>
            <NavigationDots
                currentProjectIndex={currentProjectIndex}
                projects={projects}
                setCurrentProjectIndex={setCurrentProjectIndex}
            />
        </div>
    );
};
