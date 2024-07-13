import adminUser from '@/assets/scripts/user';
import { createContext, ReactNode, useContext, useReducer } from 'react';
import type {
	Action,
	ContextProps,
	InitialState
} from '~/types/authContextTypes';

const initialState: InitialState = {
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user') || '')
		: null,
	authState: localStorage.getItem('authState')
		? localStorage.getItem('authState') === 'true'
		: false
};

const reducer = (state: InitialState, action: Action) => {
	switch (action.type) {
		case 'login':
			localStorage.setItem('authState', 'true');
			localStorage.setItem('user', JSON.stringify(adminUser));
			return { ...state, authState: true, user: action.payload };
		case 'logout':
			localStorage.setItem('authState', 'false');
			localStorage.setItem('user', JSON.stringify(null));
			return { ...state, authState: false };
		default:
			throw new Error('Action type unknown');
	}
};

const AuthContext = createContext<(InitialState & ContextProps) | undefined>(
	undefined
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [{ user, authState }, dispatch] = useReducer(reducer, initialState);

	const login = (username: string, password: string) => {
		if (
			username === import.meta.env.VITE_USERNAME &&
			password === import.meta.env.VITE_PASSWORD
		) {
			dispatch({ type: 'login', payload: adminUser });
			return true;
		}
		return false;
	};
	const logout = () => {
		dispatch({ type: 'logout' });
	};

	return (
		<AuthContext.Provider value={{ user, authState, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined)
		throw new Error('AuthContext must be used within an AuthProvider');
	return context;
};

export { AuthProvider, useAuth };
