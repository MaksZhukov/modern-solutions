import Layout from '../../layouts/Layout';
import styles from './contacts.module.scss';
import Container from '../../components/Container/Container';
import { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';
import axios from 'axios';

export default function Contacts() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [emailStatus, setEmailStatus] = useState('');

    const handleSubmit = async () => {
        try {
            await axios.post('api/email', { name, phone, text: comment });
            setEmailStatus('success');
        } catch (err) {
            setEmailStatus('error');
        }
    };

    return (
        <Container>
            <h2 className={styles.title}>Контакты</h2>
            <p className={styles.subtitle}>
                Позвоните или напишите нам, чтобы узнать больше о внедрении продуктов 1C на Вамем предприятии
            </p>
            <div className={styles.content}>
                <div className={styles.content__left}>
                    <div className={styles['phone']}>
                        <span className={styles['phone__text']}>Телефон:</span>
                        <a href="tel:+375257402263" className={styles['phone__tel']}>
                            +375 (25) 740-22-63
                        </a>
                        <img className={styles.phone__img} src="phone.jpg" alt="Phone"></img>
                    </div>
                    <div className={styles.email}>
                        <div className={styles.email__title}>E-MAIL:</div>
                        <a href="mailto:it-cooperation@yandex.by" className={styles.email__value}>
                            it-cooperation<span>@</span>yandex.by
                        </a>
                    </div>
                </div>
                <div className={styles.content__right}>
                    {emailStatus === 'success' ? (
                        <div className={styles.success}>Вопрос был отправлен руководителю</div>
                    ) : (
                        <div className={styles['form']}>
                            <div className={styles['form__title']}>Задать вопрос руководителю</div>
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
                                <Button onClick={handleSubmit}>ПОДАТЬ ЗАЯВКУ</Button>
                            </div>
                            {emailStatus === 'error' && (
                                <div className={styles.error}>
                                    Ошибка отправки письма, обратитесь на почту{' '}
                                    <a className={styles.email__value} href="mailto:it-cooperation@yandex.by">
                                        it-cooperation@yandex.by
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
}

export async function getStaticProps() {
    return { props: {} };
}
