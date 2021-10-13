import classNames from 'class-names';
import styles from './Button.module.scss';

const Button = ({ children, className }) => {
    return (
        <button className={classNames(styles.button, className)}>
            {children}
        </button>
    );
};

export default Button;
