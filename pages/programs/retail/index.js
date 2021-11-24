import Accordion from '../../../components/Accordion/Accordion';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import Layout from '../../../layouts/Layout';
import styles from './retail.module.scss';

export default function Retail() {
    return (
        <Layout>
            <Container>
                <h2 className={styles.title}>1С:Розница 8 для Беларуси</h2>
            </Container>
        </Layout>
    );
}
