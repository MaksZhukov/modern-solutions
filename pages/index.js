import Layout from '../layouts/Layout';
import Button from '../components/Button/Button';
import Slider from 'react-slick';
// import client from '../database';
import Image from 'next/image';
import styles from './index.module.scss';
import Container from '../components/Container/Container';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

const clientImages = Array(10)
    .fill()
    .map((item, index) => `/client-${index + 1}.jpg`);

const services = [
    {
        name: 'Внедрение 1С',
        desc: 'Быстро внедрим программы 1C',
        url: 'services-1.jpg',
    },
    {
        name: 'Сопровождение 1C',
        desc: 'Оказываем комплекс услуг на регулярной основе, предназначенных для поддержания и развития существующей системы автоматизации',
        url: 'services-2.jpg',
    },
    {
        name: '1C ИТС',
        desc: 'Информационно-технологическое сопровождение для пользователей 1C',
        url: 'services-3.jpg',
    },
    {
        name: '1C Автоматизация',
        desc: 'Комплексно автоматизируем учет и управление всех участков бизнеса',
        url: 'services-4.jpg',
    },
    {
        name: 'Оптимизация 1C',
        desc: 'Улучшаем производительность информационной системы 1C',
        url: 'services-5.jpg',
    },
    {
        name: 'Абонентская 1C',
        desc: 'Поддерживаем стабильное функционирование платформы с учётом последних обновлений программы',
        url: 'services-6.jpg',
    },
];

const advantages = [
    {
        name: 'Индивидуальный подход',
        url: 'individual-approach.jpg',
    },
    {
        name: 'Профессиональная аналитика',
        url: 'professional-analytics.jpg',
    },
    {
        name: 'Полное сопровождение',
        url: 'full-support.jpg',
    },
    {
        name: 'Контролируемый бюджет',
        url: 'controlled-budget.jpg',
    },
    {
        name: 'Гарантия ожидаемого результата',
        url: 'guarantee-result.jpg',
    },
];

export default function Home() {
    return (
        <Layout>
            <Parallax
                bgImage='main-section.webp'
                bgImageAlt='1c'
                contentClassName={styles['main-section__content']}
                strength={300}
                className={styles['main-section']}>
                <h1 className={styles['main-section__title']}>
                    АВТОМАТИЗАЦИЯ БИЗНЕСА С ПОМОЩЬЮ ПРОГРАММ 1С
                </h1>
                <h2 className={styles['main-section__subtitle']}>
                    Мы предлагаем полный спектр профессиональных услуг по
                    обслуживанию систем 1С:Предприятие.{' '}
                </h2>
            </Parallax>
            <Container>
                <h2 className={styles.title}>
                    РАБОТАЕМ СО ВСЕМИ СУЩЕСТВУЮЩИМИ ПРОДУКТАМИ «1С», А ТАКЖЕ
                    ГОТОВЫ ПРЕДЛОЖИТЬ СВОИ РАЗРАБОТКИ
                </h2>
                <div className={styles.subtitle}>
                    РАБОТАЕМ В ВАШЕМ ОФИСЕ И УДАЛЕННО
                </div>
                <div className={styles.services}>
                    {services.map((item) => (
                        <div
                            key={item.name}
                            className={styles['services__item']}>
                            <h3 className={styles['services__title']}>
                                {item.name}
                            </h3>
                            <img
                                className={styles['services__img']}
                                src={item.url}
                                alt='Usluga'
                            />
                            <div className={styles['services__description']}>
                                {item.desc}
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className={styles.title}>Преимущества работы с нами</h2>
                <div className={styles['guarantees']}>
                    {advantages.map((item) => (
                        <div className={styles['guarantees__item']}>
                            <img
                                src={item.url}
                                className={styles['guarantees__img']}></img>
                            <h3 className={styles['guarantees__title']}>
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>
                <h2 className={styles['title']}>Наши клиенты</h2>
                <Slider
                    centerMode
                    arrows
                    infinite
                    speed={500}
                    slidesToScroll={2}
                    slidesToShow={3}
                    className={styles.clients}>
                    {clientImages.map((item, index) => (
                        <div key={item} className={styles['clients__item']}>
                            <img
                                className={styles['clients__img']}
                                src={item}
                            />
                        </div>
                    ))}
                </Slider>
            </Container>
        </Layout>
    );
}
