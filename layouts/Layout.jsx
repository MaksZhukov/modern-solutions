import Link from 'next/link';
import Image from 'next/image';
import styles from './Layout.module.scss';
import Container from '../components/Container/Container';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';

const menu = [
	{ path: '/', name: 'Главная' },
	{ path: '/programs', name: 'Программы' },
	{ path: '/prices', name: 'Прайс-лист' },
	{ path: '/services', name: 'Услуги' },
	{ path: '/contacts', name: 'Контакты' },
	{ path: '/reviews', name: 'Отзывы' },
];

export default function Layout({ children }) {
	const router = useRouter();
	const ref = useRef();
	const [isOpenedMobileMenu, setIsOpenedMobileMenu] = useState(false);

	const handleClickOutside = () => {
		setIsOpenedMobileMenu(false);
	};

	useOnClickOutside(ref, handleClickOutside);

	const handleClickMobileMenu = () => {
		setIsOpenedMobileMenu(!isOpenedMobileMenu);
	};
	return (
		<>
			<header className={styles.header}>
				<Container className={styles['header__content']}>
					<div className={styles['logo-menu-container']}>
						<div className={styles.logo}>
							<Link href='/'>
								<Image
									src={'/logo.jpg'}
									width={256}
									height={36}
									alt='Logo'
									className={styles.logo__img}></Image>
							</Link>
						</div>
						<div
							onClick={handleClickMobileMenu}
							className={styles['menu-button-container']}>
							<div
								className={classNames(styles['menu-button'], {
									[styles['menu-button_active']]:
										isOpenedMobileMenu,
								})}></div>
						</div>
						<nav>
							<ul
								ref={ref}
								className={classNames(styles['list'], {
									[styles['list_closed']]:
										!isOpenedMobileMenu,
								})}>
								{menu.map((item) => {
									return (
										<li
											key={item.path}
											className={classNames(
												styles['list__item'],
												{
													[styles[
														'list__item_active'
													]]:
														router.pathname ==
														item.path,
												}
											)}>
											<Link href={item.path}>
												<span
													className={
														styles[
															'list__item-content'
														]
													}>
													{item.name}
												</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>
					</div>
					<div className={styles.contacts}>
						<a
							className={styles['contacts__link']}
							href='tel:+375257402263'>
							+375 (25) 740-22-63
						</a>
						<a
							className={styles['contacts__link']}
							href='mailto:it-cooperation@yandex.by'>
							it-cooperation@yandex.by
						</a>
					</div>
				</Container>
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<Container className={styles['footer__content']}>
					<div className={styles.about}>
						<h4 className={styles['about__title']}>О НАС</h4>
						<div className={styles['about__description']}>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsam laborum quod quis amet autem consectetur
							voluptatibus et ut aspernatur sequi ducimus atque
							voluptate laudantium, eaque odit quo hic rem cumque.
						</div>
						<span className={styles['about__reg']}>
							В торговом реестре с 17 мая 2017, Свидетельство о
							гос. регистрации №191646728, 20.12.2011 выдано
							Мингорисполкомом
						</span>
					</div>
				</Container>
			</footer>
		</>
	);
}
