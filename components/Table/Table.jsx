import classNames from 'classnames';
import React from 'react';
import styles from './Table.module.scss';

const Table = ({ columns, data, className }) => {
	return (
		<table className={classNames(styles.table, className)}>
			<thead className={styles['table__head']}>
				<tr>
					{columns.map((item) => (
						<td
							key={item.name}
							className={classNames(styles['table__cell'], {
								[styles['table__cell_right']]:
									item.align === 'right',
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
								let { width, align } = columns[index];
								return (
									<td
										key={value}
										width={width}
										className={classNames(
											styles['table__cell'],
											{
												[styles['table__cell_right']]:
													align === 'right',
											}
										)}>
										{typeof value === 'number'
											? value.toFixed(2)
											: value}
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
