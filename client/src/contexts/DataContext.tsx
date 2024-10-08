import axios from 'axios';
import { createContext, ReactNode, useContext, useReducer } from 'react';
import type {
	Action,
	ContextType,
	InitialState
} from '~/types/dataContextTypes';
import { DataType } from '~/types/interfaces';

const initialState: InitialState = {
	chocolatesData: [],
	premiumsData: [],
	isLoading: true,
	error: ''
};

const reducer = (state: InitialState, action: Action) => {
	switch (action.type) {
		case 'loading':
			return { ...state, isLoading: true };
		case 'chocolates/loaded':
			return { ...state, chocolatesData: action.payload, isLoading: false };
		case 'chocolate/post':
			return {
				...state,
				chocolatesData: [...state.chocolatesData, action.payload],
				isLoading: false
			};
		case 'chocolate/delete':
			return {
				...state,
				chocolatesData: state.chocolatesData.filter(
					item => item['_id'] !== action.payload
				),
				isLoading: false
			};
		case 'premiums/loaded':
			return { ...state, premiumsData: action.payload, isLoading: false };
		case 'error':
			return { ...state, error: action.payload, isLoading: false };
		default:
			throw new Error('Action Unknown');
	}
};

const DataContext = createContext<undefined | (InitialState & ContextType)>(
	undefined
);

const DataProvider = ({ children }: { children: ReactNode }) => {
	const [{ chocolatesData, premiumsData, isLoading, error }, dispatch] =
		useReducer(reducer, initialState);

	const getChocolates = () => {
		dispatch({ type: 'loading' });
		axios
			.get(`/api/v1/chocolates`)
			.then(res => dispatch({ type: 'chocolates/loaded', payload: res.data }))
			.catch(err => dispatch({ type: 'error', payload: err.message }));
	};

	const postChocolate = async (data: DataType) => {
		axios
			.post(`/api/v1/chocolates`, data)
			.then(res => dispatch({ type: 'chocolate/post', payload: res.data }))
			.catch(err => dispatch({ type: 'error', payload: err.message }));
	};

	const deleteChocolate = async (id: string) => {
		axios
			.delete(`/api/v1/chocolates/${id}`)
			.then(() => dispatch({ type: 'chocolate/delete', payload: id }))
			.catch(err => dispatch({ type: 'error', payload: err.message }));
	};

	const getPremiums = () => {
		dispatch({ type: 'loading' });
		axios
			.get(`/api/v1/premiums`)
			.then(res => dispatch({ type: 'premiums/loaded', payload: res.data }))
			.catch(err => dispatch({ type: 'error', payload: err.message }));
	};

	return (
		<DataContext.Provider
			value={{
				chocolatesData,
				premiumsData,
				isLoading,
				error,
				getChocolates,
				getPremiums,
				postChocolate,
				deleteChocolate
			}}>
			{children}
		</DataContext.Provider>
	);
};

const useData = () => {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error('useDataContext must be used within a DataProvider');
	}
	return context;
};

export { DataProvider, useData };
