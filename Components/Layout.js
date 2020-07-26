import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div className="sr-orange2-bg mh-100">
			<Navigation />

			<main>{children}</main>

			<Footer />
		</div>
	);
}
