import { useState, useEffect, useRef } from 'react';
import { isElementInView } from 'utils';

export const useCurrentSectionInView = () => {
    //TODO: refactor this code
    const [currentSectionInViewId, setCurrentSectionInViewId] =
        useState(null);
    const isInitialRenderRef = useRef(true);

    useEffect(() => {
        const allSections = [...document.querySelectorAll('section')];
        const footer = document.getElementById('footer');
        const setCurrentSectionInView = () => {
            if (isElementInView(footer)) {
                setCurrentSectionInViewId(null);
            }
            allSections.forEach(section => {
                if (isElementInView(section)) {
                    setCurrentSectionInViewId(section.id);
                }
            });
        };
        if (isInitialRenderRef.current) {
            setCurrentSectionInView();
            isInitialRenderRef.current = false;
        }

        window.addEventListener('scroll', setCurrentSectionInView);
        return () => {
            window.removeEventListener('scroll', setCurrentSectionInView);
        };
    }, [currentSectionInViewId]);

    return [currentSectionInViewId, setCurrentSectionInViewId];
};
