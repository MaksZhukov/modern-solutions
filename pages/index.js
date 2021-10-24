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
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

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

const help1cYouTabs = [
    'Бухгалтерам',
    'Малому бизнесу',
    'Интернет магазинам',
    'Торговым компаниям',
];

const help1cYouTabsContent = [
    {
        url: 'how-it-helps-1.png',
        title: 'Решение 1C для бухгалтеров:',
        advantages: [
            'Сдавайте отчетность прямо из 1С. Всегда в срок и без стресса.',
            'Ведите нескольких баз на одном аккаунте одновременно.',
            '1С в облаке работает быстро, без сбоев. В разгар отчетности вы оцените это!',
            'Наши вебинары, самоучитель и консультации по 1С помогут в работе.',
            'База 1С требует доработки под ваши нужды? Наши программисты справятся с любой задачей.',
        ],
    },
    {
        url: 'how-it-helps-2.png',
        title: 'Решение 1C для малого бизнеса/стартапов:',
        advantages: [
            'Никаких первоначальных затрат на серверы, лицензии и установку.',
            'Нет нужды в длительных настройках – все работает сразу.',
            'Пошаговый самоучитель на сайте поможет Вам изучить и освоиться в работе с программой.',
            'Сокращение издержек на поддержку.',
            'Доступны сразу несколько конфигураций, поэтому Вы сможете подобрать идеально подходящую именно для Вас.',
        ],
    },
    {
        url: 'how-it-helps-3.png',
        title: 'Решение 1C для интернет-магазинов:',
        advantages: [
            'Быстрая интеграция с сайтом.',
            'Стабильная работа операторов в офисе и на складе.',
            'Ноль затрат на серверы и построение ИТ-инфраструктуры.',
            'Начало работы за пару минут. Наши специалисты помогут 24 часа в сутки.',
            'Высокая отказоустойчивость, прописанная в договоре.',
        ],
    },
    {
        url: 'how-it-helps-4.png',
        title: 'Решение 1C для торговых компаний:',
        advantages: [
            'Даже высоконагруженные базы 1С работают быстро. Ваши сотрудники это оценят.',
            'Существенная экономия на серверах и поддержке.',
            'Возможность интеграции с CRM. Все Ваши клиенты под контролем.',
            'Высокая отказоустойчивость. Сервис доступен всегда. Гарантируем деньгами.',
            'Можно доработать базу 1С под свои нужды. Конфигуратор открыт.',
        ],
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
                <h2 className={styles.title}>Как 1C поможет вам?</h2>
                <Tabs className={styles['helps-1c']}>
                    <TabList className={styles['helps-1c__tabs']}>
                        {help1cYouTabs.map((item) => (
                            <Tab
                                className={styles['helps-1c__tab']}
                                selectedClassName={
                                    styles['helps-1c__tab_selected']
                                }
                                key={item}>
                                {item}
                            </Tab>
                        ))}
                    </TabList>
                    {help1cYouTabsContent.map((item) => (
                        <TabPanel
                            key={item.title}
                            className={styles['helps-1c__pane']}>
                            <img
                                className={styles['helps-1c__img']}
                                src={item.url}
                                alt={item.title}></img>
                            <div className={styles['helps-1c__content']}>
                                <h2 className={styles['helps-1c__title']}>
                                    {item.title}
                                </h2>
                                <ul>
                                    {item.advantages.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
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
