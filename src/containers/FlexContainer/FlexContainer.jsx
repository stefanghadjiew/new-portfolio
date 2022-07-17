import React from 'react';

export const FlexContainer = ({
    flexDirection,
    justifyContent,
    alignItems,
    children,
    padding,
    className,
    width,
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection,
                justifyContent,
                alignItems,
                padding,
                width,
            }}
            className={className}
        >
            {children}
        </div>
    );
};
