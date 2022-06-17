import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    host: 'smtp.yandex.ru',
    port: 465,
    ssl: true
});

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, phone, text } = req.body;
        client.send(
            {
                from: `<${process.env.SMTP_USER}>`,
                to: `<${process.env.SMTP_USER}>`,
                subject: 'Вопрос руководителю',
                attachment: [
                    {
                        data: `<html><p>Имя: ${name}</p><p>Телефон: ${phone}</p><p>Коментарий: ${text}</p></html>`,
                        alternative: true
                    }
                ]
            },
            (err, mess) => {
                console.log(err, mess);
                if (err) {
                    res.status(400).send();
                    return;
                }
                res.status(200).send();
            }
        );
    }
}
