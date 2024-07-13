interface User {
	name: string;
	role: string;
	image: string;
}

interface ContextProps {
	login: (username: string, password: string) => boolean;
	logout: () => void;
}

interface InitialState {
	user: User | null;
	authState: boolean;
}

type Action = { type: 'login'; payload: User } | { type: 'logout' };

export type { Action, ContextProps, InitialState, User };
