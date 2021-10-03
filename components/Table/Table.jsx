import classNames from 'classnames';
import React from 'react';
import styles from './Table.module.scss';

const Table = ({ columns, data }) => {
    return (
        <table className={styles.table}>
            <thead className={styles['table__head']}>
                <tr>
                    {columns.map((item) => (
                        <td
                            key={item.name}
                            className={classNames(styles['table__cell'], {
                                [styles['table__cell_center']]:
                                    item.align === 'center',
                            })}>
                            {item.name}
                        </td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, indexItem) => {
                    let values = Object.values(item);
                    return (
                        <tr key={indexItem}>
                            {values.map((value, index) => {
                                let align = columns[index].align;
                                return (
                                    <td
                                        key={value}
                                        className={classNames(
                                            styles['table__cell'],
                                            {
                                                [styles['table__cell_center']]:
                                                    align === 'center',
                                            }
                                        )}>
                                        {value}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
