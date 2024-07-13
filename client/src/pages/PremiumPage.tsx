import ErrorMessage from '@/components/ErrorMessage';
import PremiumHeader from '@/components/layout/PremiumHeader';
import Loader from '@/components/Loader';
import Premium from '@/components/Premium';
import { useData } from '@/contexts/DataContext';
import { useEffect } from 'react';

const PremiumPage = () => {
	const { premiumsData, fakeLoading, getPremiums, isLoading, error } =
		useData();

	useEffect(() => {
		document.title = 'Cocoa Insights | Premiums';
	}, []);

	useEffect(() => {
		fakeLoading();
		setTimeout(() => {
			getPremiums();
		}, 1000);
	}, []);

	if (isLoading) return <Loader />;

	if (premiumsData.length === 0 || error)
		return (
			<div className="smooth-rendering">
				<ErrorMessage
					image="/data error.webp"
					type={error}
					message="There has been an error geting data from the server. Please wait or reload the page. If you are still experiencing the issue, email us."
					css="ml-3"
				/>
			</div>
		);

	return (
		<main className="smooth-rendering container my-16">
			<PremiumHeader />
			<section className="grid grid-cols-[repeat(3,300px)] justify-center gap-14">
				{premiumsData.map(data => (
					<Premium key={data['_id']} data={data} />
				))}
			</section>
		</main>
	);
};

export default PremiumPage;
