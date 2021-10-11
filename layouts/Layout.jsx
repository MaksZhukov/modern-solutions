import Link from 'next/link';
import styles from './Layout.module.scss';
import Container from '../components/Container/Container';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const menu = [
    { path: '/', name: 'Главная' },
    { path: '/programs', name: 'Программы' },
    { path: '/prices', name: 'Прайс-лист' },
    { path: '/uslugi', name: 'Услуги' },
    { path: '/contacts', name: 'Контакты' }
];

export default function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <header className={styles.header}>
                <Container className={styles['header__content']}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <img className={styles['logo__img']} src="logo.jpg" alt="Logo"></img>
                        </Link>
                        <span className={styles['logo__text']}>Современное решение</span>
                    </div>
                    <nav>
                        <ul className={styles['list']}>
                            {menu.map((item) => {
                                return (
                                    <li
                                        key={item.path}
                                        className={classNames(styles['list__item'], {
                                            [styles['list__item_active']]: router.pathname == item.path
                                        })}>
                                        <Link href={item.path}>
                                            <span className={styles['list__item-content']}>{item.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className={styles.contacts}>
                        <a className={styles['contacts__link']} href="#">
                            +375 (29) 999-99-99
                        </a>
                        <a className={styles['contacts__link']} href="#">
                            +375 (29) 999-99-99
                        </a>
                        <a className={styles['contacts__link']} href="#">
                            it-cooperation@gmail.ru
                        </a>
                        <span>Время работы: 10:00-22:00</span>
                    </div>
                </Container>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <Container className={styles['footer__content']}>
                    <div className={styles.about}>
                        <h4 className={styles['about__title']}>О НАС</h4>
                        <div className={styles['about__description']}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum quod quis amet autem
                            consectetur voluptatibus et ut aspernatur sequi ducimus atque voluptate laudantium, eaque
                            odit quo hic rem cumque.
                        </div>
                        <span className={styles['about__reg']}>
                            В торговом реестре с 17 мая 2017, Свидетельство о гос. регистрации №191646728, 20.12.2011
                            выдано Мингорисполкомом
                        </span>
                    </div>
                </Container>
            </footer>
        </>
    );
}
