import React from 'react';

export const ClickawayListener = ({
    setOpenPortal,
    setBackdropComponent,
    children,
}) => {
    const handleClickAway = e => {
        if (e.target.className.includes('click-away-listener')) {
            setOpenPortal(false);
            setBackdropComponent(null);
        }
    };

    return (
        <div className="click-away-listener" onClick={handleClickAway}>
            {children}
        </div>
    );
};
