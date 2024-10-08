import AddForm from '@/components/AddForm';
import User from '@/components/User';
import { useEffect } from 'react';

const AddNewPage = () => {
	useEffect(() => {
		document.title = 'Cocoa Insights | Add New';
	}, []);

	return (
		<main className="container my-16">
			<User />
			<section className="mt-16">
				<AddForm />
			</section>
		</main>
	);
};

export default AddNewPage;
