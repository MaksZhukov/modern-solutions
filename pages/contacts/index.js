import Layout from '../../layouts/Layout';
import { Map, YMaps } from 'react-yandex-maps';
import Slider from 'react-slick';
// import client from '../database';
import styles from './contacts.module.scss';
import Container from '../../components/Container/Container';
import { useEffect, useState } from 'react';

export default function Contacts() {
    return (
        <Layout>
            <Container>
                <h2 className={styles.title}>Контакты</h2>
                <h3 className={styles.subtitle}>
                    Позвоните или напишите нам, чтобы узнать больше о внедрении продуктов 1C на Вамем предприятии
                </h3>
                <div className={styles.content}>
                    <div className={styles['content__mobile']}>mobile</div>
                    <div className={styles['content__map']}>
                        <div className={styles['content__map-info']}>
                            <div className={styles['content__map-address']}>
                                <h3>АДРЕС</h3>
                                <div>115432, Москва, проспект Андропова, д.18 корпус 1, м. технопарк</div>
                            </div>
                            <div className={styles['content__map-working-hours']}>
                                <h3>ВРЕМЯ РАБОТЫ</h3>
                                <div>10:00 - 19:00</div>
                            </div>
                        </div>
                        <YMaps>
                            <Map width="100%" defaultState={{ center: [55.75, 37.57], zoom: 15 }} />
                        </YMaps>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
