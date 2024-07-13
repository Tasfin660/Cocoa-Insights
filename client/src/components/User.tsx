import filterArray from '@/assets/scripts/filterArray';
import { useAuth } from '@/contexts/AuthContext';
import { useData } from '@/contexts/DataContext';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { TbSquareRotatedFilled } from 'react-icons/tb';
import type { User } from '~/types/authContextTypes';

const User = () => {
	const { user } = useAuth();
	const {
		chocolatesData,
		premiumsData,
		getChocolates,
		getPremiums,
		isLoading
	} = useData();

	const { name, role, image } = user || {};

	const brands = chocolatesData?.map(item => item.brand);
	const pBrands = premiumsData?.map(item => item.brand);
	const filteredBrands = filterArray(brands);
	const filteredPBrands = filterArray(pBrands);

	useEffect(() => {
		getChocolates();
		getPremiums();
	}, []);

	return (
		<div className="flex flex-col rounded-2xl border-2 border-zinc-50/10 bg-secondary-dark p-6">
			<div className="flex items-center justify-center gap-16 text-sm">
				<img src={image} alt={name} className="w-16 rounded-full shadow-xl" />
				<div className="h-[70px] w-[1px] rounded-full bg-brand-extradark"></div>
				<div className="grid grid-cols-[repeat(2,max-content)] gap-x-3 gap-y-1.5">
					<p>
						Role<span className="font-semibold">:</span>
					</p>
					<p className="text-brand-dark">{role}</p>
					<p>
						Name<span className="font-semibold">:</span>
					</p>
					<p className="text-brand-dark">{name}</p>
				</div>
				<div className="h-[70px] w-[1px] rounded-full bg-brand-extradark"></div>
				<div className="grid grid-cols-[repeat(2,max-content)] gap-x-3 gap-y-1.5">
					<p>
						Access<span className="font-semibold">:</span>
					</p>
					<p>Full</p>
					<p>
						Location<span className="font-semibold">:</span>
					</p>
					<p>
						<Icon icon="emojione-v1:flag-for-bangladesh" className="text-lg" />
					</p>
				</div>
				<div className="h-[70px] w-[1px] rounded-full bg-brand-extradark"></div>
				<div className="grid grid-cols-[repeat(2,max-content)] gap-x-3 gap-y-1.5">
					<p>
						Owner<span className="font-semibold">:</span>
					</p>
					<p>Tasfin</p>
					<p>
						Created At<span className="font-semibold">:</span>
					</p>
					<p>13 July, 2024</p>
				</div>
			</div>
			<div className="mt-6 flex justify-between rounded-full border-2 border-zinc-50/10 px-10 py-3">
				<div className="flex items-center gap-2 text-zinc-50/60 duration-300 hover:text-primary-light">
					<TbSquareRotatedFilled />
					Popular Brands: <span>{filteredBrands.length}</span>
				</div>
				<div className="flex items-center gap-2 text-zinc-50/60 duration-300 hover:text-primary-light">
					<TbSquareRotatedFilled />
					Premium Brands: <span>{filteredPBrands.length}</span>
				</div>
				<div className="flex items-center gap-2 text-zinc-50/60 duration-300 hover:text-primary-light">
					<TbSquareRotatedFilled />
					Popular Chocolates: <span>{isLoading ? '...' : brands.length}</span>
				</div>
				<div className="flex items-center gap-2 text-zinc-50/60 duration-300 hover:text-primary-light">
					<TbSquareRotatedFilled />
					Premium Chocolates: <span>{isLoading ? '...' : pBrands.length}</span>
				</div>
				<div className="flex items-center gap-2 text-zinc-50/60 duration-300 hover:text-primary-light">
					<TbSquareRotatedFilled />
					Total:{' '}
					<span>{isLoading ? '...' : brands.length + pBrands.length}</span>
				</div>
			</div>
		</div>
	);
};

export default User;
