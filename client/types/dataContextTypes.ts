import { DataType } from './interfaces';

interface ContextType {
	fakeLoading: () => void;
	getChocolates: () => void;
	getPremiums: () => void;
	postChocolate: (data: DataType) => void;
	deleteChocolate: (id: string) => void;
}

interface InitialState {
	chocolatesData: DataType[];
	premiumsData: DataType[];
	isLoading: boolean;
	error: string;
}

type Action =
	| { type: 'loading' }
	| { type: 'chocolates/loaded'; payload: DataType[] }
	| { type: 'chocolate/post'; payload: DataType }
	| { type: 'chocolate/delete'; payload: string }
	| { type: 'premiums/loaded'; payload: DataType[] }
	| { type: 'error'; payload: string };

export type { Action, ContextType, InitialState };
