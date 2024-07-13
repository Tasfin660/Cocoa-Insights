import { useData } from '@/contexts/DataContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPenToSquare } from 'react-icons/fa6';
import * as yup from 'yup';
import type { DataType } from '~/types/interfaces';
import DisplayMessage from './DisplayMessage';
import ValidationEffect from './ValidationEffect';

const schema = yup.object().shape({
	brand: yup.string().required(),
	brand_link: yup.string().required(),
	name: yup.string().required(),
	image: yup.string().required(),
	shop_link: yup.string().required()
});

const AddForm = () => {
	const [showMessage, setShowMessage] = useState<boolean | null>(false);
	const [fakeLoading, setFakeLoading] = useState(false);
	const { error: serverError, postChocolate } = useData();

	const {
		register,
		handleSubmit,
		formState: { errors: inputErrors },
		reset,
		watch
	} = useForm<DataType>({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: DataType) => {
		setFakeLoading(true);
		setShowMessage(false);
		setTimeout(() => {
			postChocolate(data);
			setFakeLoading(false);
			setShowMessage(true);
		}, 1500);
		reset();
	};

	const handleMessage = () => {
		setShowMessage(prev => !prev);
	};

	return (
		<>
			<form
				className="form-spliter relative mx-auto grid w-[700px] grid-cols-2 items-center gap-x-12 gap-y-6 overflow-hidden rounded-t-2xl bg-secondary-dark p-8"
				onSubmit={handleSubmit(onSubmit)}>
				<p className="flex items-center gap-3 justify-self-center text-xl font-medium text-brand-dark">
					<FaPenToSquare /> Add New Chocolate
				</p>
				<ActiveInput watch={watch} />
				<input
					type="text"
					placeholder="Chocolate Name"
					{...register('name')}
					autoComplete="off"
					className="w-full rounded-full border-[1px] border-zinc-50/20 bg-zinc-900 px-5 py-2.5 text-sm text-primary-light outline-none duration-300 placeholder:text-zinc-50/60 focus:shadow-xl"
				/>
				<input
					type="text"
					placeholder="Brand Name"
					{...register('brand')}
					autoComplete="off"
					className="w-full rounded-full border-[1px] border-zinc-50/20 bg-zinc-900 px-5 py-2.5 text-sm text-primary-light outline-none duration-300 placeholder:text-zinc-50/60 focus:shadow-xl"
				/>
				<input
					type="text"
					placeholder="Image Url"
					{...register('image')}
					autoComplete="off"
					className="w-full rounded-full border-[1px] border-zinc-50/20 bg-zinc-900 px-5 py-2.5 text-sm text-primary-light outline-none duration-300 placeholder:text-zinc-50/60 focus:shadow-xl"
				/>
				<input
					type="text"
					placeholder="Brand Link"
					{...register('brand_link')}
					autoComplete="off"
					className="w-full rounded-full border-[1px] border-zinc-50/20 bg-zinc-900 px-5 py-2.5 text-sm text-primary-light outline-none duration-300 placeholder:text-zinc-50/60 focus:shadow-xl"
				/>
				<input
					type="text"
					placeholder="Shop Link"
					{...register('shop_link')}
					autoComplete="off"
					className="w-full rounded-full border-[1px] border-zinc-50/20 bg-zinc-900 px-5 py-2.5 text-sm text-primary-light outline-none duration-300 placeholder:text-zinc-50/60 focus:shadow-xl"
				/>
				<button
					className="w-full rounded-full bg-brand-dark py-2.5 font-semibold text-secondary-dark outline-none duration-300 hover:bg-brand-extradark active:opacity-80 disabled:cursor-not-allowed disabled:hover:bg-brand-dark disabled:active:opacity-100"
					disabled={Object.keys(inputErrors).length !== 0 && true}>
					Submit
				</button>
				{fakeLoading && <ValidationEffect />}
			</form>
			<div className="form-image relative mx-auto h-[60px] w-[700px] overflow-hidden rounded-b-2xl">
				<img
					src="/form image.webp"
					alt="form image"
					className="size-full object-cover"
				/>
			</div>
			{showMessage && (
				<DisplayMessage
					type={serverError ? 'error' : 'success'}
					head={serverError ? 'Server Error!' : 'Action Successful!'}
					message={
						serverError ? 'Could not add to db' : 'New chocolate added to db'
					}
					onClick={handleMessage}
				/>
			)}
		</>
	);
};

const ActiveInput = ({ watch }: { watch: (arg: string) => string }) => {
	return (
		<div className="flex items-center justify-center gap-4">
			<div
				className={`h-1.5 w-8 rounded-full duration-300 ${watch('name') ? 'bg-brand' : 'bg-zinc-50/40'}`}></div>
			<div
				className={`h-1.5 w-8 rounded-full duration-300 ${watch('brand') ? 'bg-brand' : 'bg-zinc-50/40'}`}></div>
			<div
				className={`h-1.5 w-8 rounded-full duration-300 ${watch('image') ? 'bg-brand' : 'bg-zinc-50/40'}`}></div>
			<div
				className={`h-1.5 w-8 rounded-full duration-300 ${watch('brand_link') ? 'bg-brand' : 'bg-zinc-50/40'}`}></div>
			<div
				className={`h-1.5 w-8 rounded-full duration-300 ${watch('shop_link') ? 'bg-brand' : 'bg-zinc-50/40'}`}></div>
		</div>
	);
};

export default AddForm;
