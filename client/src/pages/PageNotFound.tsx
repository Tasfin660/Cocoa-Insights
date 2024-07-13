import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.history.replaceState(null, pathname, '/404');
	}, [pathname]);

	return (
		<ErrorMessage
			image="/not-found.webp"
			type="404 - Not Found"
			message="The page you're looking for doesn't exist. Please check the URL or return to homepage."
			css="-translate-x-6 translate-y-[47px]"
		/>
	);
};

export default PageNotFound;
