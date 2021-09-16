import Layout from '../layouts/Layout';
import Button from '../components/Button/Button';
import Slider from 'react-slick';
// import client from '../database';
import Image from 'next/image';
import styles from './index.module.scss';
import Container from '../components/Container/Container';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const clientImages = Array(10)
    .fill()
    .map((item, index) => `/client-${index + 1}.jpg`);

export default function Home() {
    return (
        <Layout>
            <Container>
                <h2>НАШИ КЛИЕНТЫ</h2>
                <Slider
                    centerMode
                    arrows
                    infinite
                    speed={500}
                    slidesToScroll={2}
                    slidesToShow={3}
                    className={styles.clients}>
                    {clientImages.map((item, index) => (
                        <div className={styles['clients__item']}>
                            <img
                                className={styles['clients__img']}
                                src={`client-${index + 1}.jpg`}
                            />
                        </div>
                    ))}
                </Slider>
            </Container>
        </Layout>
    );
}
