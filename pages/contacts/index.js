import Layout from '../../layouts/Layout';
import { Map, YMaps } from 'react-yandex-maps';
import Slider from 'react-slick';
// import client from '../database';
import styles from './contacts.module.scss';
import Container from '../../components/Container/Container';
import { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';

export default function Contacts() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const handleSubmit = () => {};

    return (
        <Layout>
            <Container>
                <h2 className={styles.title}>Контакты</h2>
                <p className={styles.subtitle}>
                    Позвоните или напишите нам, чтобы узнать больше о внедрении продуктов 1C на Вамем предприятии
                </p>
                <div className={styles.content}>
                    <div className={styles.content__left}>
                        <div className={styles['phone']}>
                            <span className={styles['phone__text']}>Телефон:</span>
                            <a href="#" className={styles['phone__tel']}>
                                +375 (29) 999-99-99
                            </a>
                            <img className={styles.phone__img} src="phone.jpg" alt="Phone"></img>
                        </div>
                        <div className={styles.email}>
                            <div className={styles.email__title}>E-MAIL:</div>
                            <a href="it-cooperation@gmail.ru" className={styles.email__value}>
                                it-cooperation<span>@</span>gmail.ru
                            </a>
                        </div>
                    </div>
                    <div className={styles.content__right}>
                        <div className={styles['content__right-info']}>
                            <div className={styles['content__right-info-address']}>
                                <h2>АРДЕС</h2>
                                <div>115432, Москва, проспект Андропова, д.18 корпус 1, м. технопарк</div>
                            </div>
                            <div className={styles['content__right-working-hours']}>
                                <h2>ВРЕМЯ РАБОТЫ:</h2>
                                <div>10:00 - 19:00</div>
                            </div>
                        </div>
                        <div className={styles['content__map']}>
                            <YMaps>
                                <Map
                                    width="100%"
                                    height="360px"
                                    defaultState={{
                                        center: [55.75, 37.57],
                                        zoom: 15
                                    }}
                                />
                            </YMaps>
                        </div>
                    </div>
                </div>
            </Container>
            <div className={styles['section-form']}>
                <Container className={styles['section-form__container']}>
                    <div className={styles['section-form__left']}>
                        <div className={styles['section-form__head']}>
                            <img src="head-photo.jpg" className={styles['section-form__photo']}></img>
                            <div className={styles['section-form__name']}>
                                <span>А</span>ндрей
                            </div>
                            <div className={styles['section-form__position']}>
                                Генеральный директор компании "Комплексное управление бизнесом"
                            </div>
                        </div>
                    </div>
                    <div className={styles['section-form__right']}>
                        <div className={styles['section-form__right-title']}>Задать вопрос руководителю</div>
                        <div className={styles.form}>
                            <div className={styles.form__control}>
                                <Input onChange={({ target: { value } }) => setName(value)} placeholder="Имя"></Input>
                            </div>
                            <div className={styles.form__control}>
                                <Input
                                    onChange={({ target: { value } }) => setPhone(value)}
                                    placeholder="Телефон"></Input>
                            </div>
                            <div className={styles.form__control}>
                                <Textarea
                                    onChange={({ target: { value } }) => setComment(value)}
                                    placeholder="Ваш комментарий"
                                    rows="10"></Textarea>
                            </div>
                            <div className={styles.form__policy}>
                                Нажимая на кнопку "Подать заявку" вы соглашаетесь на обработку персональных данных.
                            </div>
                            <div className={styles.form__control}>
                                <Button>ПОДАТЬ ЗАЯВКУ</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    );
}
