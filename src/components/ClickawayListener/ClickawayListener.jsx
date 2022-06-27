import React from 'react';

export const ClickawayListener = ({
    setOpenPortal,
    setBackdropComponent,
    children,
}) => {
    const handleClickAway = e => {
        if (
            e.target.className.includes('click-away-listener') ||
            e.target.className.includes('grid__container') ||
            e.target.className.includes('grid')
        ) {
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
