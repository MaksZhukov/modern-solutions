import Container from '../../components/Container/Container';
import Layout from '../../layouts/Layout';
import styles from './reviews.module.scss';

const reviews = [
    {
        companyName: 'Компания',
        product: '1C Управление торговли',
        sphere: 'Производство и сбыт продуктов питания',
        url: 'review-1.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        companyName: 'Компания',
        product: '1C Управление торговли',
        sphere: 'Производство и сбыт продуктов питания',
        url: 'review-1.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        companyName: 'Компания',
        product: '1C Управление торговли',
        sphere: 'Производство и сбыт продуктов питания',
        url: 'review-1.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
];

export default function Prices() {
    return (
        <Layout>
            <Container>
                <h2 className={styles.title}>Отзывы</h2>
                <div className={styles.reviews}>
                    {reviews.map((item) => (
                        <div className={styles.reviews__item}>
                            <div className={styles.reviews__left}>
                                <img
                                    className={styles.reviews__img}
                                    alt='Company name'
                                    src={item.url}></img>
                                <div
                                    className={styles['reviews__company-name']}>
                                    {item.companyName}
                                </div>
                            </div>
                            <div className={styles.reviews__right}>
                                <h3>Продукт</h3>
                                <p>{item.product}</p>
                                <h3>Сфера дейтельности</h3>
                                <p>{item.sphere}</p>
                                <br></br>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Layout>
    );
}
