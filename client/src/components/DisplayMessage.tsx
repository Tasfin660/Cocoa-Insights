import { FaCheckCircle } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { MdOutlineNearbyError } from 'react-icons/md';

const DisplayMessage = ({
	type,
	head,
	message,
	onClick
}: {
	type: string;
	head: string;
	message: string;
	onClick: () => void;
}) => {
	return (
		<div
			className={`authError-animation fixed top-40 flex items-center gap-3 rounded-full ${type === 'error' ? 'bg-red-700' : 'bg-green-700'} pr-4`}>
			<div className="flex items-center gap-4 rounded-full rounded-r-full bg-primary-light py-1.5 pl-4 pr-6 shadow-pqina-2">
				{type === 'error' ? (
					<MdOutlineNearbyError className="box-content flex-shrink-0 text-3xl text-red-600" />
				) : (
					<FaCheckCircle className="box-content flex-shrink-0 text-2xl text-green-600" />
				)}
				<div>
					<p
						className={`text-sm font-bold ${type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
						{head}
					</p>
					<p className="text-xs font-semibold text-primary-dark">{message}</p>
				</div>
			</div>
			<button onClick={onClick}>
				<IoIosCloseCircle className="rounded-full text-xl shadow-pqina-2 duration-300 hover:rotate-90" />
			</button>
		</div>
	);
};

export default DisplayMessage;
