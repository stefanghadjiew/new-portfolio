import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { personalInfo } from 'staticResources';
import styles from './styles.module.scss';

export const ContactInfo = ({
    darkTheme,
    enableItemBackground = false,
}) => {
    return (
        <div className={styles.contacts}>
            <div
                className={`${styles.email} ${
                    enableItemBackground &&
                    styles['email--enableBackground']
                }`}
            >
                <MdEmail className={darkTheme ? 'svg--dark-theme' : ''} />{' '}
                {personalInfo.email}
            </div>
            <div
                className={`${styles.phone} ${
                    enableItemBackground &&
                    styles['phone--enableBackground']
                }`}
            >
                <AiFillPhone
                    className={darkTheme ? 'svg--dark-theme' : ''}
                />{' '}
                {personalInfo.phone}
            </div>
            <div
                className={`${styles.location} ${
                    enableItemBackground &&
                    styles['location--enableBackground']
                }`}
            >
                <MdLocationOn
                    className={darkTheme ? 'svg--dark-theme' : ''}
                />{' '}
                {personalInfo.location}
            </div>
        </div>
    );
};
