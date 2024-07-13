import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { GrFacebookOption } from 'react-icons/gr';

const Social = () => {
	return (
		<div className="flex items-center gap-2 text-sm text-brand">
			<a href="#">
				<GrFacebookOption />
			</a>
			<span className="-ml-1 -mr-[2px] font-black opacity-20">·</span>
			<a href="#">
				<FaInstagram />
			</a>
			<span className="-ml-[2px] -mr-[2px] font-black opacity-20">·</span>
			<a href="#">
				<FaXTwitter />
			</a>
		</div>
	);
};

export default Social;
