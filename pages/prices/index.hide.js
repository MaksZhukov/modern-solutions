import Container from '../../components/Container/Container';
import Layout from '../../layouts/Layout';
import styles from './prices.module.scss';
import {
	programs,
	serverLicenses,
	servicesITS,
	workPlaceLicenses,
} from '../../config';
import classNames from 'classnames';
import Table from '../../components/Table/Table';

export default function Prices() {
	return (
		<Container>
			<h2 className={styles.title}>Прайс-лист</h2>
			<Table
				columns={[
					{ name: 'Программы' },
					{ name: 'Цена руб.коп.', width: 150, align: 'right' },
				]}
				data={programs}></Table>

			<Table
				columns={[
					{ name: 'Лицензии на рабочие места' },
					{ name: 'Цена руб.коп.', width: 150, align: 'right' },
				]}
				data={workPlaceLicenses}></Table>
			<Table
				columns={[
					{ name: 'Лицензии на сервер' },
					{ name: 'Цена руб.коп.', width: 150, align: 'right' },
				]}
				data={serverLicenses}></Table>
			<Table
				className={styles['last-table']}
				columns={[
					{ name: 'Сервисы ИТС' },
					{ name: 'Цена руб.коп.', width: 150, align: 'right' },
				]}
				data={servicesITS}></Table>
		</Container>
	);
}

export async function getStaticProps() {
	return { props: {} };
}
