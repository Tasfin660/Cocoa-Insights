import {
	FaDiscord,
	FaFacebookF,
	FaGithub,
	FaLink,
	FaLinkedinIn,
	FaWhatsapp,
	FaXTwitter
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiDotOutlineFill } from 'react-icons/pi';
import { TiArrowRightThick } from 'react-icons/ti';

const Footer = () => {
	return (
		<footer className="shadowxl border-t-2 border-secondary-dark bg-zinc-900 py-6">
			<div className="container flex items-center justify-between">
				<div className="flex w-72 flex-col gap-3 font-medium">
					<div className="flex items-center font-[Arial] text-sm">
						<FaWhatsapp className="text-base" />
						<PiDotOutlineFill className="text-base" />
						+8801816899005
					</div>
					<div className="flex items-center text-sm">
						<MdEmail className="text-base" />
						<PiDotOutlineFill className="text-base" />
						tasfinhasan660@gmail.com
					</div>
				</div>
				<div className="flex flex-col items-center gap-6">
					<SocialLinks />
					<p className="font-medium">
						Copyright &copy; Tasfin Hasan | Cocoa Insights&nbsp;
						{new Date().getFullYear()}. All Rights Reserved.
					</p>
				</div>
				<div className="flex flex-col items-end gap-4">
					<input
						type="text"
						className="h-11 w-72 rounded-full border-[1px] border-zinc-50/40 bg-zinc-900 px-4 text-xs outline-none duration-300 placeholder:text-zinc-50/60 focus:border-zinc-50/60"
						placeholder="Report a bug"
					/>
					<button className="mr-5 box-content rounded-full bg-brand-dark p-1 text-secondary-dark duration-300 hover:bg-brand-extradark">
						<TiArrowRightThick />
					</button>
				</div>
			</div>
		</footer>
	);
};

const SocialLinks = () => {
	return (
		<div className="footer-socialLink-box shadowxl flex w-[400px] justify-around rounded-full bg-secondary-dark pb-2 pt-2.5">
			<a
				href="https://www.facebook.com/Tasfin660"
				target="_blank"
				className="box-content rounded-full p-1 text-sm shadow-xl duration-300 hover:bg-brand-extradark hover:text-secondary-dark">
				<FaFacebookF />
			</a>
			<a
				href="#"
				target="_blank"
				className="box-content rounded-full p-1 text-sm shadow-xl duration-300 hover:bg-brand-extradark hover:text-secondary-dark">
				<FaLinkedinIn />
			</a>
			<a
				href="https://x.com/Tasfin660"
				target="_blank"
				className="box-content rounded-full p-1 text-sm shadow-xl duration-300 hover:bg-brand-extradark hover:text-secondary-dark">
				<FaXTwitter />
			</a>
			<a
				href="https://github.com/Tasfin660"
				target="_blank"
				className="box-content rounded-full p-1 text-sm shadow-xl duration-300 hover:bg-brand-extradark hover:text-secondary-dark">
				<FaGithub />
			</a>
			<a
				href="https://discord.com/users/513693207880663040"
				target="_blank"
				className="box-content rounded-full p-1 text-sm shadow-xl duration-300 hover:bg-brand-extradark hover:text-secondary-dark">
				<FaDiscord />
			</a>
			<a
				href="https://github.com/Tasfin660/cocoa-insights"
				target="_blank"
				className="box-content rounded-full p-1 text-sm shadow-xl duration-300 hover:bg-brand-extradark hover:text-secondary-dark">
				<FaLink />
			</a>
		</div>
	);
};

export default Footer;
