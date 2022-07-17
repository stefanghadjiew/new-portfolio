import { useState, useEffect } from 'react';
import { isElementInView, validateInput } from 'utils';

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);

    const handleChange = e => {
        setValue(e.target.value);
        setError(
            validateInput(e.currentTarget.type, e.currentTarget.value)
        );
    };

    useEffect(() => {
        setError(false);
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        if (!value) {
            setError(false);
        }
    }, [value]);

    return { value, handleChange, error };
};

export const usePortal = () => {
    const [loaded, setLoaded] = useState(false);
    const portalId = `backdrop-portal`;

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
