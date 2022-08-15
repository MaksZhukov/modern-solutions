import TawkTo from 'tawkto-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-tabs/style/react-tabs.css';
import '../styles/index.scss';
import Layout from '../layouts/Layout';
import { useEffect } from 'react';

import { hotjar } from 'react-hotjar';

const propertyId = '62de92e037898912e95f88ae';
const tawkId = '1g8qmrf5f';

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		new TawkTo(propertyId, tawkId);
		hotjar.initialize(3091960, 6);

		hotjar.identify('USER_ID', { userProperty: 'value' });
	}, []);
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
