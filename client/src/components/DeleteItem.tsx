import { useData } from '@/contexts/DataContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTrash } from 'react-icons/fa6';
import * as yup from 'yup';
import DisplayMessage from './DisplayMessage';

interface FormTypes {
	objectId: string;
	checkbox: boolean;
}

const schema = yup.object().shape({
	objectId: yup.string().required(),
	checkbox: yup.boolean().required()
});

const DeleteItem = () => {
	const { chocolatesData, deleteChocolate, error } = useData();
	const [showMessage, setShowMessage] = useState(false);

	const { register, handleSubmit, reset } = useForm<FormTypes>({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: FormTypes) => {
		if (!chocolatesData.some(item => item['_id'] === data.objectId)) {
			alert(`No document with this id exist. Please check your id again.`);
			location.reload();
		}
		setShowMessage(false);
		deleteChocolate(data.objectId);
		setShowMessage(true);
		reset();
	};

	const handleMessage = () => {
		setShowMessage(prev => !prev);
	};

	return (
		<>
			<div className="flex flex-col gap-4 px-4">
				<p className="ml-2 flex items-center gap-2 justify-self-center text-lg font-medium text-brand-dark">
					<FaTrash className="text-sm" /> Confirm Delete
				</p>
				<form
					className="grid grid-cols-[repeat(2,max-content)] items-center gap-5"
					onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Enter objectId"
						autoComplete="off"
						{...register('objectId')}
						className="w-64 rounded-full border-[1px] border-zinc-50/20 bg-zinc-900 px-5 py-2.5 text-sm text-primary-light outline-none duration-300 placeholder:text-zinc-50/60 focus:shadow-xl"
					/>
					<button className="rounded-full bg-red-600 px-4 py-1.5 font-semibold text-primary-light duration-300 hover:bg-red-700 active:opacity-80">
						Delete
					</button>
					<div className="ml-2">
						<input
							type="checkbox"
							id="checkbox"
							{...register('checkbox')}
							className="mr-2"
						/>
						<label htmlFor="checkbox" className="text-sm">
							I am aware of the consequence
						</label>
					</div>
				</form>
			</div>
			{showMessage && (
				<DisplayMessage
					type={error ? 'error' : 'success'}
					head={error ? 'Action Failed!' : 'Action Successful!'}
					message={
						error ? 'Could not delete. Try again.' : 'Chocolate deleted from db'
					}
					onClick={handleMessage}
				/>
			)}
		</>
	);
};

export default DeleteItem;
