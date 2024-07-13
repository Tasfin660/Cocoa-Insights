import { useAuth } from '@/contexts/AuthContext';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();
	const { authState } = useAuth();

	useEffect(() => {
		if (!authState) navigate('/unauthorized', { replace: true });
	}, [authState, navigate]);
	return authState && children;
};

export default ProtectedRoutes;
