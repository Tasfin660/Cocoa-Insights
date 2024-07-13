import DeleteItem from '@/components/DeleteItem';
import DeleteWarnings from '@/components/DeleteWarnings';
import GetId from '@/components/GetId';
import User from '@/components/User';

const AdminPage = () => {
	return (
		<main className="container my-16">
			<User />
			<section className="mt-16 rounded-2xl border-2 border-zinc-50/10 bg-secondary-dark p-6">
				<DeleteWarnings />
				<div className="mt-10 grid grid-cols-2">
					<GetId />
					<DeleteItem />
				</div>
			</section>
		</main>
	);
};

export default AdminPage;
