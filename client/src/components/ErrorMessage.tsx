import type { ErrorMessage } from '~/types/interfaces';

const ErrorMessage = ({ image, type, message, css }: ErrorMessage) => {
	return (
		<main className="container my-16 flex justify-center">
			<section className="flex h-full flex-col items-center">
				<div className="mb-8 flex items-center justify-center">
					<img src={image} alt={image} className="w-24" />
					<p className={`text-2xl font-semibold text-brand ${css}`}>{type}</p>
				</div>
				<p className="w-[600px] text-center">{message}</p>
			</section>
		</main>
	);
};

export default ErrorMessage;
