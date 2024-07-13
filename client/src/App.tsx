import { AuthProvider } from '@/contexts/AuthContext';
import AllChocolatePage from '@/pages/AllChocolatePage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import PageNotFound from '@/pages/PageNotFound';
import ProtectedRoutes from '@/pages/ProtectedRoutes';
import UnauthorizedPage from '@/pages/UnauthorizedPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { DataProvider } from './contexts/DataContext';
import AddNewPage from './pages/AddNewPage';
import AdminPage from './pages/AdminPage';
import PremiumPage from './pages/PremiumPage';

const App = () => {
	return (
		<AuthProvider>
			<DataProvider>
				<Router>
					<MainLayout>
						<Routes>
							<Route index element={<HomePage />} />
							<Route path="all-chocolates" element={<AllChocolatePage />} />
							<Route path="premium-chocolates" element={<PremiumPage />} />
							<Route path="login" element={<LoginPage />} />
							<Route
								path="add-new-chocolate"
								element={
									<ProtectedRoutes>
										<AddNewPage />
									</ProtectedRoutes>
								}
							/>
							<Route
								path="admin"
								element={
									<ProtectedRoutes>
										<AdminPage />
									</ProtectedRoutes>
								}
							/>
							<Route path="unauthorized" element={<UnauthorizedPage />} />
							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</MainLayout>
				</Router>
			</DataProvider>
		</AuthProvider>
	);
};

export default App;
