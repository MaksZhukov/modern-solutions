import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Layout from '../../layouts/Layout';
import styles from './services.module.scss';
import { useRouter } from 'next/router';
import { services } from '../../config';

export default function Prices() {
	const router = useRouter();

	const handleClick = (href) => () => {
		router.push('services/' + href);
	};
	return (
		<Container>
			<div className={styles.services}>
				{services.map((item, index) => (
					<div key={item.title} className={styles.services__item}>
						<img
							className={styles.services__img}
							alt={item.title}
							src={item.url}></img>
						<div className={styles.reviews__content}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
							<Button onClick={handleClick(item.href)}>
								Подробнее
							</Button>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}

export async function getStaticProps() {
	return { props: {} };
}
