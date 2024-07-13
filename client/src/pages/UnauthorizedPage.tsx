import ErrorMessage from '@/components/ErrorMessage';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UnauthorizedPage = () => {
	const { authState } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (authState) navigate('/', { replace: true });
	}, [authState, navigate]);

	return (
		<ErrorMessage
			image="/unauthorized.webp"
			type="Unauthorized Access"
			message="Your can't access without a verification. Please log in using a valid username and password to proceed. If you are experiencing issues, you can request for a trial."
		/>
	);
};

export default UnauthorizedPage;
