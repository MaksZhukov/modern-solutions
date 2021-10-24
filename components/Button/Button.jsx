import classNames from 'class-names';
import styles from './Button.module.scss';

const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={classNames(styles.button, className)}>
            {children}
        </button>
    );
};

export default Button;
