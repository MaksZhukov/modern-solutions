import TawkTo from 'tawkto-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-tabs/style/react-tabs.css';
import '../styles/index.scss';
import Layout from '../layouts/Layout';
import { useEffect } from 'react';

const propertyId = '62de92e037898912e95f88ae';
const tawkId = '1g8qmrf5f';

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		new TawkTo(propertyId, tawkId);
	}, []);
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
