import styles from './Textarea.module.scss';

const Textarea = ({ placeholder, value, onChange, rows }) => {
    return (
        <textarea
            className={styles.textarea}
            placeholder={placeholder}
            value={value}
            rows={rows}
            onChange={onChange}></textarea>
    );
};

export default Textarea;
