import styles from './Input.module.scss';

const Input = ({ placeholder, value, onChange }) => {
    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type='text'></input>
    );
};

export default Input;
