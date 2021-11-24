import classNames from 'class-names';
import { useState } from 'react';
import styles from './Accordion.module.scss';

const Accordion = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClickHeader = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div
            className={classNames(styles.accordion, {
                [styles.accordion_expanded]: isExpanded,
            })}>
            <div
                onClick={handleClickHeader}
                className={styles.accordion__header}>
                {title}
            </div>
            {isExpanded && (
                <div className={styles.accordion__content}>{content}</div>
            )}
        </div>
    );
};

export default Accordion;
