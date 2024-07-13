import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/" className="flex">
			<img src="/logo.webp" alt="logo" className="w-14" />
			<p className="translate-y-1.5 self-end font-greatVibes text-lg text-brand">
				Cocoa Insights
			</p>
		</Link>
	);
};

export default Logo;
