import React from 'react';
import styles from './styles.module.scss';

export const Input = ({
    type,
    value,
    label,
    id,
    onChange,
    error = false,
}) => {
    return (
        <div className={styles['input__wrapper']}>
            <div className={styles['label__wrapper']}>
                <label htmlFor={id} className={styles['label']}>
                    {label}
                </label>
            </div>
            <input
                name="input"
                className={styles.input}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
            {error && <p className={styles['error']}>{error}</p>}
        </div>
    );
};
