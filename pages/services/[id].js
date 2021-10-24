import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Layout from '../../layouts/Layout';
import styles from './services.module.scss';
import { useRouter } from 'next/router';
import { services } from '../../config';

export default function Prices() {
    const router = useRouter();

    return (
        <Layout>
            <Container>
                <div style={{ margin: '50px 0', textAlign: 'center' }}>
                    Услуга {router.query.id}
                </div>
            </Container>
        </Layout>
    );
}
