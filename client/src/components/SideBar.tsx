import filterArray from '@/assets/scripts/filterArray';
import { TiArrowRight } from 'react-icons/ti';
import type { SideBar } from '~/types/interfaces';

const SideBar = ({ chocolatesData, activeBrand, onActiveBrand }: SideBar) => {
	const brands = chocolatesData?.map(item => item.brand) ?? [];
	const uniqueBrands = filterArray(brands);

	return (
		<div className="fixed min-w-[250px] rounded-2xl border-2 border-zinc-50/10 bg-secondary-dark py-3">
			<p className="border-b-2 border-zinc-50/10 pb-2.5 text-center text-brand">
				Popular Brands
			</p>
			<div className="mt-3 flex flex-col gap-2">
				<button
					className={`flex items-center gap-1 rounded-sm px-3 py-[3px] duration-300 hover:bg-orange-200/10 ${activeBrand === 'All' ? 'brand--active' : ''}`}
					onClick={() => onActiveBrand('All')}>
					<TiArrowRight className="text-lg" />
					<p className="text-sm font-bold capitalize tracking-wide">All</p>
				</button>
				{uniqueBrands?.map((brand, i) => (
					<BrandTitle
						key={i}
						name={brand}
						activeBrand={activeBrand}
						onActiveBrand={onActiveBrand}
					/>
				))}
			</div>
		</div>
	);
};

const BrandTitle = ({ name, activeBrand, onActiveBrand }: SideBar) => {
	return (
		<button
			className={`flex items-center gap-1 rounded-sm px-3 py-[3px] duration-300 hover:bg-orange-200/10 ${activeBrand === name ? 'brand--active' : ''}`}
			onClick={() => onActiveBrand(name || '')}>
			<TiArrowRight className="text-lg" />
			<p className="text-sm font-bold capitalize tracking-wide"> {name}</p>
		</button>
	);
};

export default SideBar;
