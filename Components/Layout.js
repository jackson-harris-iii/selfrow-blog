import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Tracking from './Tracking'

export default function Layout({ children }) {
	return (
		<div className="sr-orange2-bg mh-100">
			<Tracking />
			<Navigation />

			<main className="pt-5">{children}</main>

			<Footer />
		</div>
	);
}
