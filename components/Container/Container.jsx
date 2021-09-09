import classNames from 'class-names';
import styles from './Container.module.scss';

const Container = ({ children, className }) => {
    return (
        <div className={classNames(styles.container, className)}>
            {children}
        </div>
    );
};

export default Container;
