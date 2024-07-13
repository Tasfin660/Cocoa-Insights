import { FaRegStar, FaStar } from 'react-icons/fa6';

const Stars = ({ rate }: { rate: number }) => {
	return (
		<div className="mt-[2px] flex items-center gap-[3px] text-[10px] text-brand-dark">
			{Array.from({ length: 5 }, (_, i) => i).map(i =>
				i < rate ? <FaStar key={i} /> : <FaRegStar key={i} />
			)}
		</div>
	);
};

export default Stars;
