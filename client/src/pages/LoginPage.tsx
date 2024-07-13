import Login from '@/components/Login';
import { useEffect } from 'react';

const LoginPage = () => {
	useEffect(() => {
		document.title = 'Cocoa Insights | Login';
	}, []);

	return (
		<main className="container flex justify-center">
			<Login />
		</main>
	);
};

export default LoginPage;
