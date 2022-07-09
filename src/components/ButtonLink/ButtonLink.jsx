import React from 'react';
import styles from './styles.module.scss';
import { Paragraph } from 'components';

export const ButtonLink = ({ text, onClick }) => {
    return (
        <button className={styles['button-link']} onClick={onClick}>
            <Paragraph text={text} style={{ margin: 0 }} />
        </button>
    );
};
