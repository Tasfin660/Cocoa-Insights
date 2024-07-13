import Footer from '@/components/layout/Footer';
import MainNav from '@/components/layout/MainNav';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }: { children: ReactNode }) => {
	const location = useLocation();

	return (
		<div className="grid min-h-screen grid-rows-[max-content,1fr,max-content] bg-primary-dark font-raleway text-primary-light">
			<MainNav />
			{children}
			{location.pathname !== '/' ? <Footer /> : <div></div>}
		</div>
	);
};

export default MainLayout;
