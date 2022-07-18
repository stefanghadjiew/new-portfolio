import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import { Emoji } from 'components';
import { assignClasses } from 'utils';

//TODO: Remove all inline styles from the component

export const BigTitle = ({ text, type = 'h1', style }) => {
    return (
        <div style={style} className={styles['big-title']}>
            {type === 'h1' ? <h1>{text}</h1> : <h2>{text}</h2>}
        </div>
    );
};

export const Title = ({ text, style, className, classes }) => {
    return (
        <h2
            style={style}
            className={[
                className,
                assignClasses(classes),
                styles.title,
                'pt-3',
            ].join(' ')}
        >
            {text}
        </h2>
    );
};

export const Subtitle = ({
    text,
    type = 'h3',
    emoji,
    style,
    classes,
    className,
}) => {
    return (
        <Fragment>
            {type === 'h3' ? (
                <h3
                    className={[
                        'f-400',
                        className,
                        assignClasses(classes),
                    ].join(' ')}
                    style={style}
                >
                    {emoji && <Emoji emoji={emoji} />}
                    {text}
                </h3>
            ) : (
                <h4
                    className={['f-400', assignClasses(classes)].join(' ')}
                    style={style}
                >
                    {text}
                </h4>
            )}
        </Fragment>
    );
};

export const Paragraph = ({ style, text, className, classes }) => {
    return (
        <p
            style={style}
            className={[
                styles.paragraph,
                assignClasses(classes),
                className,
            ].join(' ')}
        >
            {text}
        </p>
    );
};
