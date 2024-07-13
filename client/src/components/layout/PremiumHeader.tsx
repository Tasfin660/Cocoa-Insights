import { LuDot } from 'react-icons/lu';

const PremiumHeader = () => {
	return (
		<div className="premium-gradient relative mb-14 flex items-center justify-between rounded-sm px-12">
			<Box image="/premium logo left.webp" />
			<div className="flex translate-y-1.5 items-center justify-center gap-6">
				<Wing image="/premium wing short left.webp" />
				<h1 className="flex items-center text-center font-greatVibes text-[35px] font-semibold tracking-wider">
					Premium Chocolates <LuDot className="-mx-1 text-3xl" /> Taste Luxury
				</h1>
				<Wing image="/premium wing short right.webp" />
			</div>
			<Box image="/premium logo right.webp" />
		</div>
	);
};

const Box = ({ image }: { image: string }) => {
	return (
		<div className="premium-logo size-20 rotate-45 rounded-md shadow-pqina-2">
			<img src={image} alt="premium header icon" className="-rotate-45 p-4" />
		</div>
	);
};

const Wing = ({ image }: { image: string }) => {
	return <img src={image} alt="premium wing" className="w-40 -translate-y-3" />;
};

export default PremiumHeader;
