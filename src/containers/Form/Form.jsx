import React from 'react';
import { Button } from 'components';

export const Form = ({ darkTheme, children }) => {
    return (
        <form className="full-container-size" autoComplete="off">
            {children}
            <Button
                type="submit"
                text="Submit"
                darkTheme={darkTheme}
                style={{ width: '150px' }}
            />
        </form>
    );
};
