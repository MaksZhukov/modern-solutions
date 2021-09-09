import Layout from '../layouts/Layout';
import Button from '../components/Button/Button';
// import client from '../database';
import styles from './index.module.scss';

export default function Home() {
    return (
        <Layout>
            <div className='container'>
                Home <Button>Подробне</Button>
            </div>
        </Layout>
    );
}
