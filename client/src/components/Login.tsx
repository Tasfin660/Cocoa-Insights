import { useAuth } from '@/contexts/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import DisplayMessage from './DisplayMessage';
import ValidationEffect from './ValidationEffect';

interface FormTypes {
	username: string;
	password: string;
}

const schema = yup.object().shape({
	username: yup.string().required('username is required.'),
	password: yup.string().required('password is required')
});

const Login = () => {
	const navigate = useNavigate();
	const { authState, login } = useAuth();
	const [showError, setShowError] = useState<boolean | null>(null);
	const [fakeLoading, setFakeLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors: inputErrors },
		reset
	} = useForm<FormTypes>({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: FormTypes) => {
		setFakeLoading(true);
		setShowError(false);
		setTimeout(() => {
			setShowError(!login(data.username, data.password));
			setFakeLoading(false);
			reset();
		}, 1500);
	};

	const handleError = () => {
		setShowError(prev => !prev);
	};

	useEffect(() => {
		if (authState) navigate('/add-new-chocolate', { replace: true });
	}, [authState, navigate]);

	return (
		<>
			<section className="container my-16 flex justify-center">
				<form
					className="relative flex h-max flex-col overflow-hidden rounded-lg bg-secondary-dark px-12 py-8"
					onSubmit={handleSubmit(onSubmit)}>
					<div className="relative shadow-md">
						<label
							htmlFor="username"
							className="absolute -top-[10%] left-[10%] bg-secondary-dark px-2 text-xs tracking-wide text-brand">
							Username
						</label>
						<FaUser className="absolute left-[6%] top-[55%] -translate-y-1/2 text-sm text-brand" />
						<input
							type="text"
							id="username"
							className="w-80 rounded-full border-2 border-zinc-200/40 bg-secondary-dark pb-2 pl-[39px] pr-4 pt-3 text-lg text-zinc-50/90 outline-none duration-300 focus:border-zinc-200/70"
							{...register('username')}
							autoComplete="off"
						/>
						{inputErrors?.username && (
							<p className="form-error-animation absolute -bottom-6 right-8 text-xs font-medium italic text-red-500">
								{inputErrors?.username?.message}
							</p>
						)}
					</div>
					<div className="relative mb-8 mt-10 shadow-md">
						<label
							htmlFor="password"
							className="absolute -top-[10%] left-[10%] bg-secondary-dark px-2 text-xs tracking-wide text-brand">
							Password
						</label>
						<IoMdLock className="absolute left-[6%] top-1/2 -translate-y-1/2 text-sm text-brand" />
						<input
							type="password"
							id="password"
							className="w-80 rounded-full border-2 border-zinc-200/40 bg-secondary-dark pb-2 pl-[39px] pr-4 pt-3 text-lg text-zinc-50/90 outline-none duration-300 focus:border-zinc-200/70"
							{...register('password')}
						/>
						{inputErrors?.password && (
							<p className="form-error-animation absolute -bottom-6 right-8 text-xs font-medium italic text-red-500">
								{inputErrors?.password?.message}
							</p>
						)}
					</div>
					<button className="self-center rounded-full bg-brand px-4 py-1.5 font-semibold text-primary-dark shadow-xl duration-300 hover:text-zinc-800 active:translate-y-[2px] active:bg-orange-200/80 active:text-zinc-950 active:shadow-md">
						Log In
					</button>
					<div className="my-6 flex items-center">
						<span className="h-[1px] w-full bg-brand"></span>
						<p className="text-primary-light/80 px-2 text-xs font-medium">Or</p>
						<span className="h-[1px] w-full bg-brand"></span>
					</div>
					<p className="self-center text-xs">
						<span>Don't know the password?</span>
						<a
							href="mailto:tasfinhasan660@gmail.com"
							target="_blank"
							className="ml-1 text-brand hover:underline">
							Request for a trial?
						</a>
					</p>
					{fakeLoading && <ValidationEffect />}
				</form>
			</section>
			{showError && (
				<DisplayMessage
					type="error"
					head="Authentication Error!"
					message="Incorrect username or password"
					onClick={handleError}
				/>
			)}
		</>
	);
};

export default Login;
