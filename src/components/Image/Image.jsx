import styles from './styles.module.scss';

export const Image = ({ src, style }) => {
    return <img style={style} className="image" src={src} alt={src} />;
};
