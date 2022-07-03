import { useState, useEffect, useId } from 'react';
import { isElementInView } from 'utils';

export const usePortal = () => {
    const [loaded, setLoaded] = useState(false);
    const portalId = `backdrop-portal-${useId()}`;

    useEffect(() => {
        const div = document.createElement('div');
        div.id = portalId;
        div.style = 'position:fixed; z-index:5';
        document.getElementsByTagName('body')[0].prepend(div);
        setLoaded(true);
        return () => {
            document.getElementsByTagName('body')[0].removeChild(div);
        };
    }, [portalId]);

    return { loaded, portalId };
};

export const useCurrentSectionInView = () => {
    const [currentSectionInViewId, setCurrentSectionInViewId] =
        useState('home-section');

    useEffect(() => {
        const allSections = document.querySelectorAll('section');
        const setHashToCurrentSectionId = () => {
            allSections.forEach(section => {
                if (isElementInView(section)) {
                    setCurrentSectionInViewId(section.id);
                }
            });
        };
        window.addEventListener('scroll', setHashToCurrentSectionId);
        return () => {
            window.removeEventListener(
                'scroll',
                setHashToCurrentSectionId
            );
        };
    }, [currentSectionInViewId]);

    return [currentSectionInViewId];
};
