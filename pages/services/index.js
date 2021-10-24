import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Layout from '../../layouts/Layout';
import styles from './services.module.scss';
import { useRouter } from 'next/router';
import { services } from '../../config';

export default function Prices() {
    const router = useRouter();

    const handleClick = (index) => () => {
        router.push('services/' + index);
    };
    return (
        <Layout>
            <Container>
                <div className={styles.services}>
                    {services.map((item, index) => (
                        <div className={styles.services__item}>
                            <img
                                className={styles.services__img}
                                alt={item.title}
                                src={item.url}></img>
                            <div className={styles.reviews__content}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <Button onClick={handleClick(index)}>
                                    Подробнее
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Layout>
    );
}
