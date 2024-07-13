import { MdOutlineShoppingBag } from 'react-icons/md';
import { DataType } from '~/types/interfaces';
import IndexShow from './chocolate/IndexShow';
import Social from './chocolate/Social';
import Stars from './chocolate/Stars';

const Chocolate = ({ data, index }: { data: DataType; index: number }) => {
	const { brand, brand_link, name, image, rate, shop_link } = data;

	return (
		<div className="relative overflow-hidden rounded-sm">
			<div className="glass relative bg-white px-12">
				<img src={image} alt="" className="size-full" />
			</div>
			<div className="mt-2 rounded-sm bg-secondary-dark px-2 py-3">
				<div className="mb-3 flex items-start justify-between">
					<a
						href={brand_link}
						className="text-nowrap rounded-sm bg-gradient-to-r from-[#cdb182] to-[#e9d1a6] px-2 font-crimsonPro text-sm font-extrabold uppercase text-choco shadow-pqina-2">
						{brand}
					</a>
					<Social />
				</div>
				<div className="flex items-center justify-between gap-2">
					<div>
						<p className="line-clamp-1 break-all text-lg font-medium capitalize">
							{name}
						</p>
						{rate && <Stars rate={rate} />}
					</div>
					<a
						href={shop_link}
						className="flex -translate-y-[2px] items-center gap-1 rounded-full bg-pink-700 px-2 pb-[5px] pt-[2px] font-semibold text-brand-dark duration-300 hover:bg-pink-700/80">
						<MdOutlineShoppingBag />
						<span className="translate-y-[2px] text-xs">Shop</span>
					</a>
				</div>
			</div>
			<IndexShow index={index} />
		</div>
	);
};

export default Chocolate;
