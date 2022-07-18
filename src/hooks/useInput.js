import { useState, useEffect } from 'react';
import { validateInput } from 'utils';

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
