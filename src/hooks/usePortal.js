import { useState, useEffect } from 'react';

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
