import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'makszhukov1997@gmail.com',
	password: 'ytngfhjkz199719971997',
	host: 'smtp.gmail.com',
	port: 587,

	ssl: true,
});

export default function handler(req, res) {
	if (req.method === 'POST') {
		const { name, phone, text } = req.body;
		client.send(
			{
				text: text,
				from: `${name} ${phone}`,
				to: '<makszhukov1997@gmail.com>',
				subject: 'Вопрос руководителю',
			},
			(err) => {
				console.log(err);
				if (err) {
					res.status(400);
					return;
				}
				res.status(200);
			}
		);
	}
}
