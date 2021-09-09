import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.jpg';
import styles from './Layout.module.scss';
import Container from '../components/Container/Container';

const menu = [
    { path: '/', name: 'Главная' },
    { path: '/programs', name: 'Программы' },
    { path: '/prices', name: 'Цены' },
    { path: '/uslugi', name: 'Услуги' },
    { path: '/contakty', name: 'Контакты' },
];

export default function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Container className={styles['header__content']}>
                    <div className={styles.logo}>
                        <Link href='/'>
                            <Image
                                className={styles['logo__img']}
                                width={39}
                                height={57}
                                src={Logo}
                                alt='Logo'></Image>
                        </Link>
                        <span className={styles['logo__text']}>
                            Современное решение
                        </span>
                    </div>
                    <nav>
                        <ul className={styles['list']}>
                            {menu.map((item) => {
                                return (
                                    <li className={styles['list__item']}>
                                        <Link href={item.path}>
                                            <span
                                                className={
                                                    styles['list__item-content']
                                                }>
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </Container>
            </header>
            <main className={styles.main}>{children}</main>
            <footer>footer</footer>
        </>
    );
}
