import { Icon } from '@iconify/react';
import { FaCrown } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { LuDot } from 'react-icons/lu';
import type { DataType } from '~/types/interfaces';

const Premium = ({ data }: { data: DataType }) => {
	const { brand, country, brand_link, name, image, shop_link } = data;

	return (
		<div>
			<div className="premium-background-image relative rounded-sm border-[3px] border-gold-dark bg-white px-16">
				<img src={image} alt={name} className="size-full" />
			</div>
			<div className="relative rounded-b-sm bg-blue-950/30 p-3 pt-4">
				<h3 className="premium-title relative mx-auto w-max font-greatVibes text-2xl font-semibold capitalize tracking-wider">
					{name}
				</h3>
				<p className="mb-3 mt-7 break-all text-justify text-xs">
					Experience chocolate at its most luxurious: meticulously crafted,
					using the finest ingredients, promising an unparalleled indulgence in
					sophistication.
				</p>
				<div className="flex items-center justify-between gap-6 rounded-sm bg-gradient-to-r from-[#cdb182] to-[#e9d1a6] px-3 shadow-material">
					<div className="flex items-center gap-1 text-lg text-blue-950">
						<a href={shop_link} target="_blank">
							<FaLink />
						</a>
						<span className="-ml-[5px] -mr-[3px]">
							<LuDot />
						</span>
						{country !== 'uk' && (
							<Icon icon={`emojione-v1:flag-for-${country}`} />
						)}
						{country === 'uk' && (
							<Icon icon="flagpack:gb-ukm" className="rounded-[4px] text-xs" />
						)}
					</div>
					<a
						href={brand_link}
						target="_blank"
						className="line-clamp-1 break-all font-crimsonPro text-lg font-bold uppercase tracking-wide text-choco">
						♦ {brand} ♦
					</a>
				</div>
				<FaCrown className="absolute right-3 top-2.5 text-sm text-gold-light" />
			</div>
		</div>
	);
};

export default Premium;
