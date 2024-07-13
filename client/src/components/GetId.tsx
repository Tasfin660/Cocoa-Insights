import filterArray from '@/assets/scripts/filterArray';
import { useData } from '@/contexts/DataContext';
import { useReducer } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface InitialState {
	selectedBrand: string;
	selectedItem: string;
	objectId: string;
}

type Action =
	| { type: 'select/brand'; payload: string }
	| { type: 'select/chocolate'; payload: string }
	| { type: 'get/objectId'; payload: string };

const initialState = {
	selectedBrand: 'Brand',
	selectedItem: 'Chocolate',
	objectId: ''
};

const reducer = (state: InitialState, action: Action) => {
	switch (action.type) {
		case 'select/brand':
			return {
				...state,
				selectedBrand: action.payload,
				selectedItem: 'Chocolate'
			};
		case 'select/chocolate':
			return { ...state, selectedItem: action.payload };
		case 'get/objectId':
			return {
				...state,
				selectedBrand: 'Brand',
				selectedItem: 'Chocolate',
				objectId: action.payload
			};
		default:
			throw new Error('Action unknown');
	}
};

const GetId = () => {
	const { chocolatesData } = useData();
	const [{ selectedBrand, selectedItem, objectId }, dispatch] = useReducer(
		reducer,
		initialState
	);
	const brands = chocolatesData?.map(item => item.brand) ?? [];
	const uniqueBrands = filterArray(brands);
	const uniqueChocolates = chocolatesData
		.map(item => (item.brand === selectedBrand ? item.name : null))
		.filter(item => item);

	const getObjectId = (brand: string, name: string): string => {
		const objectId =
			chocolatesData
				.map(item =>
					item.brand === brand && item.name === name ? item['_id'] : null
				)
				.filter(item => item)[0] ?? '';

		return objectId;
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch({
			type: 'get/objectId',
			payload: getObjectId(selectedBrand, selectedItem)
		});
	};

	return (
		<div className="flex flex-col gap-4 px-4">
			<p className="ml-2 flex items-center gap-2 justify-self-center text-lg font-medium text-brand-dark">
				<FaMagnifyingGlass className="text-sm" /> Get Chocolate Id
			</p>
			<form className="flex gap-5">
				<select
					className="custom footer-socialLink-box relative w-32 rounded-full border-[2px] border-zinc-50/60 bg-primary-dark px-3 py-2 text-sm outline-none"
					value={selectedBrand}
					onChange={e =>
						dispatch({ type: 'select/brand', payload: e.target.value })
					}>
					<option value="Brand" disabled>
						Brand
					</option>
					{uniqueBrands.map((brand, i) => (
						<option key={i} value={brand}>
							{brand}
						</option>
					))}
				</select>

				<select
					className="footer-socialLink-box w-60 rounded-full border-[2px] border-zinc-50/60 bg-primary-dark px-3 py-2 text-sm outline-none"
					value={selectedItem}
					onChange={e =>
						dispatch({ type: 'select/chocolate', payload: e.target.value })
					}>
					<option value="Chocolate" disabled>
						Chocolate
					</option>
					{uniqueChocolates.map((chocolate, i) => (
						<option key={i} value={chocolate || ''}>
							{chocolate}
						</option>
					))}
				</select>

				<button
					className="rounded-full bg-brand-dark px-4 font-bold text-secondary-dark duration-300 hover:bg-brand-extradark active:opacity-80"
					onClick={handleClick}>
					Get Id
				</button>
			</form>
			<p className="ml-2 font-medium">
				Id:&nbsp;&nbsp;
				<span className="font-[Arial] text-sm tracking-wide">{objectId}</span>
			</p>
		</div>
	);
};

export default GetId;
