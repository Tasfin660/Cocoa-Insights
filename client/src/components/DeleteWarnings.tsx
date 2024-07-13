import { useData } from '@/contexts/DataContext';

const DeleteWarnings = () => {
	const { chocolatesData } = useData();

	return (
		<>
			<p className="mb-2">
				<span className="mr-1 font-medium text-yellow-400">Note:</span>There are
				currently&nbsp;
				{chocolatesData.length === 0 ? '...' : chocolatesData.length} popular
				chocolates in the database. You can delete the popular chocolates, but
				premium chocolates cannot be deleted. The chocolate data is sourced from
				a backend server, so any modifications will affect the original
				database.
			</p>
			<p>
				<span className="mr-1 font-medium text-yellow-400">Warning:</span>
				Deleting a document will permanently remove it from the Database. To
				test the delete feature, it is recommended to create and delete your own
				document. Please avoid modifying the initial data to maintain a
				reference for future users.
			</p>
		</>
	);
};

export default DeleteWarnings;
