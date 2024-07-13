import Chocolate from '@/components/Chocolate';
import ErrorMessage from '@/components/ErrorMessage';
import Loader from '@/components/Loader';
import SideBar from '@/components/SideBar';
import { useData } from '@/contexts/DataContext';
import { useEffect, useState } from 'react';

const AllChocolatePage = () => {
	const { chocolatesData, getChocolates, isLoading, error } = useData();
	const [activeBrand, setActiveBrand] = useState('All');
	const handleActiveBrand = (brand: string) => {
		setActiveBrand(brand);
	};

	const filteredData =
		activeBrand === 'All'
			? chocolatesData
			: chocolatesData.filter(item => item.brand === activeBrand);

	useEffect(() => {
		document.title = 'Cocoa Insights | All';
	}, []);

	useEffect(() => {
		getChocolates();
	}, []);

	if (isLoading) return <Loader />;

	if (chocolatesData.length === 0 || error)
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
			<SideBar
				chocolatesData={chocolatesData}
				activeBrand={activeBrand}
				onActiveBrand={handleActiveBrand}
			/>
			<section className="grid grid-cols-[repeat(4,250px)] justify-end gap-12">
				{filteredData.map((data, i) => (
					<Chocolate key={data['_id']} data={data} index={i + 1} />
				))}
			</section>
		</main>
	);
};

export default AllChocolatePage;
