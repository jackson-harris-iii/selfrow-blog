import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Tracking from './Tracking'
import PrismicPreview from './PrismicPreview'
import Modal from './ContactModal'

export default function Layout({ children }) {
	return (
		<div className="sr-orange2-bg mh-100">
			<Tracking />
			<PrismicPreview />
			<Navigation />

			<main className="pt-5">{children}</main>

			<Footer />
			<Modal />
		</div>
	);
}
