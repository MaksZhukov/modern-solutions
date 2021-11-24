import Accordion from '../../../components/Accordion/Accordion';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import Layout from '../../../layouts/Layout';
import styles from './company-management.module.scss';

export default function CompanyManagement() {
    return (
        <Layout>
            <Container>
                <h2 className={styles.title}>
                    1С:Управление компанией для Беларуси
                </h2>
            </Container>
        </Layout>
    );
}
