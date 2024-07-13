import Logo from '@/components/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { FaCrown, FaUser } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const MainNav = () => {
	const { authState, logout } = useAuth();
	const navigate = useNavigate();

	const handleClick = () => {
		logout();
		navigate('/login');
	};

	return (
		<nav className="sticky top-0 z-50 border-b-2 border-secondary-dark bg-zinc-900 py-6 shadow-xl">
			<div className="container flex items-center justify-between">
				<Logo />
				<ul className="flex items-center gap-6">
					<li>
						<NavLink to="/" className="nav-link relative flex font-semibold">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="all-chocolates"
							className="nav-link relative flex font-semibold">
							View All
						</NavLink>
					</li>
					<li>
						<NavLink
							to="premium-chocolates"
							className="nav-link relative flex items-center gap-1.5 font-semibold">
							<FaCrown className="-translate-y-[1px] text-sm text-gold-light" />
							Premiums
						</NavLink>
					</li>

					{authState && (
						<li>
							<NavLink
								to="/add-new-chocolate"
								className="nav-link relative flex font-semibold">
								+Add New
							</NavLink>
						</li>
					)}

					{authState && (
						<li>
							<NavLink
								to="/admin"
								className="nav-link relative flex font-semibold">
								Admin
							</NavLink>
						</li>
					)}
					{authState ? (
						<button onClick={handleClick}>
							<IoMdLogOut className="box-content rounded-full border-[1px] border-zinc-50/50 p-2 text-gray-50/50 duration-300 hover:border-zinc-50/100 hover:text-zinc-50/100 active:border-zinc-950/100 active:bg-orange-200 active:text-zinc-950/100" />
						</button>
					) : (
						<Link to="login">
							<FaUser className="box-content rounded-full border-[1px] border-orange-200 bg-orange-200 p-2 text-zinc-950 duration-300 hover:text-zinc-800 active:border-orange-200/80 active:bg-orange-200/80 active:text-zinc-950" />
						</Link>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default MainNav;
