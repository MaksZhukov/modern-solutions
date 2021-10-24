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

const additionalServices = [
    {
        name: 'Обновление конфигураций',
        desc: 'Мы можем оперативно обновить как типовые, так и нестандартные, доработанные конфигурации.',
        url: 'service-7.jpg',
    },
    {
        name: 'Диагностика ошибок системы',
        desc: 'Мы умеем диагностировать все виды ошибок в программах «1С». Выстроенный процесс по привлечению технических экспертов позволяет разобраться в том числе с проблемами настройки серверного и сетевого оборудования.',
        url: 'service-8.jpg',
    },
    {
        name: 'Консультации по работе с программой «1С»',
        desc: 'Опытные специалисты помогут разобраться с особенностями ведения учета в системе. При необходимости мы удаленно подключаемся к вашему экрану, чтобы вместе разобраться',
        url: 'service-9.jpg',
    },
    {
        name: 'Разработка дополнительных печатных форм, отчетов и обработок',
        desc: 'Расширять функциональность программ «1С» можно без доработки основного функционала. Если необходимо разработать нестандартный отчет, или сделать индивидуальную печатную форму - мы можем сделать задачу быстро, качественно и с сохранением возможности автоматического обновления программы.',
        url: 'service-10.jpg',
    },
    {
        name: 'Интеграция с сайтами, системами биллинга и т.д.',
        desc: 'Программы «1С» можно интегрировать практически с любыми информационными системами. У нашей компании большой опыт по интеграции различных сторонних сервисов с «1С», в том числе, опыт по разработке высоконагруженных обменов.',
        url: 'service-11.jpg',
    },
    {
        name: 'Обмен данными между любыми программами 1С',
        desc: 'Мы можем как настроить типовые обмены, так и разработать любые нестандартные интеграции между системами. Так же умеем качественно диагностировать сбои в обменах. На все наши работы даем гарантию 6 месяцев.',
        url: 'service-12.jpg',
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
                <h2 className={styles['title']}>
                    Услуги, которые мы оказываем в рамках договора
                </h2>
                <div className={styles['additional-services']}>
                    {additionalServices.map((item) => (
                        <div className={styles['additional-services__item']}>
                            <img
                                className={styles['additional-services__img']}
                                src={item.url}
                                alt={item.name}
                            />
                            <h3
                                className={
                                    styles['additional-services__title']
                                }>
                                {item.name}
                            </h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className={styles['prices-info']}>
                    <img
                        className={styles['prices-info__img']}
                        src='price-info.png'></img>
                    <div className={styles['prices-info__desc']}>
                        Конечная стоимость рассчитывается индивидуально. <br />
                        Вы можете оставить заявку на расчет стоимости услуг
                        прямо сейчас, и мы свяжемся с вами для уточнения
                        деталей.
                    </div>
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
