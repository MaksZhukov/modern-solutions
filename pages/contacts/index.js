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
                <h3 className={styles.subtitle}>
                    Позвоните или напишите нам, чтобы узнать больше о внедрении
                    продуктов 1C на Вамем предприятии
                </h3>
                <div className={styles.content}>
                    <div className={styles.content__left}>
                        <img src='phone.jpg' alt='Phone'></img>
                    </div>
                    <div className={styles.content__right}></div>
                    <div className={styles['content__info']}>
                        <div className={styles['content__map-address']}>
                            <h3>Адрес</h3>
                            <div>
                                115432, Москва, проспект Андропова, д.18 корпус
                                1, м. технопарк
                            </div>
                        </div>
                        <div className={styles['content__map-working-hours']}>
                            <h3>Время работы</h3>
                            <div>10:00 - 19:00</div>
                        </div>

                        <div className={styles['content__map-working-hours']}>
                            <h3>Телефоны</h3>
                            <div>+375 (29) 999-99-99</div>
                        </div>
                    </div>
                    <div className={styles['content__map']}>
                        <YMaps>
                            <Map
                                width='100%'
                                height='300px'
                                defaultState={{
                                    center: [55.75, 37.57],
                                    zoom: 15,
                                }}
                            />
                        </YMaps>
                    </div>
                </div>
                <h2 className={styles.title}>Задать вопрос</h2>
                <div className={styles.form}>
                    <div className={styles.form__control}>
                        <Input
                            placeholder={'Имя'}
                            value={name}
                            onChange={({ target: { value } }) =>
                                setName(value)
                            }></Input>
                    </div>
                    <div className={styles.form__control}>
                        <Input
                            placeholder={'Телефон'}
                            onChange={({ target: { value } }) =>
                                setPhone(value)
                            }
                            value={phone}></Input>
                    </div>
                    <div className={styles.form__control}>
                        <Textarea
                            value={comment}
                            onChange={({ target: { value } }) =>
                                setComment(value)
                            }
                            rows={5}
                            placeholder='Ваш комментарий'></Textarea>
                    </div>
                    <div className={styles.form__control}>
                        <Button className={styles.form__submit}>
                            Отправить
                        </Button>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
