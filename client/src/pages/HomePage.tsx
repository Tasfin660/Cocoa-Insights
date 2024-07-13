import { FaGithub } from 'react-icons/fa';
import { LuDot } from 'react-icons/lu';

const HomePage = () => {
	return (
		<header className="bg-hero bg-cover bg-center">
			<div className="container flex h-full items-center justify-center gap-12">
				<div className="w-80 overflow-hidden rounded-md border-[3px] border-zinc-50/80">
					<img src="/home.webp" alt="home image" className="size-max" />
				</div>
				<div className="">
					<h2 className="mb-2 flex items-center font-greatVibes text-lg text-brand">
						Cocoa Insights <LuDot className="-mx-1 text-3xl" /> Your Gateway to
						Chocolate Delights
					</h2>
					<p className="mb-10 w-[550px] text-sm">
						Discover the world of chocolates with Cocoa Insights! Explore
						expert-curated articles on artisanal dark, milk, and white
						chocolates. Whether you're a connoisseur or a casual enthusiast,
						find new flavors, learn about chocolate making, and indulge in
						perfect treats for every occasion. Dive into our expertly crafted
						content and satisfy your chocolate cravings today!
					</p>
					<h2 className="mb-2 flex items-center font-greatVibes text-lg text-brand">
						Cocoa Insights <LuDot className="-mx-1 text-3xl" /> Your Gateway to
						Chocolate Delights
					</h2>
					<p className="mb-6 w-[550px] text-sm">
						Meet Tasfin, a self-learner and dedicated developer with a passion
						for coding. Currently diving into the world of React, Tasfin created
						Cocoa Insights as a practice project to hone his skills. With a keen
						interest in web development and a knack for turning ideas into
						reality, he's always exploring new technologies and seeking
						innovative ways to deliver delightful user experiences.
					</p>
					<div className="flex items-center justify-between">
						<a
							href="https://github.com/Tasfin660/cocoa-insights"
							target="_blank"
							className="special-btn">
							<FaGithub className="z-10 box-content rounded-full bg-brand-dark px-3 py-2 text-xl text-primary-light" />
							<span className="z-10 pl-[20px] pr-8 font-semibold text-primary-dark">
								Source code
							</span>
						</a>
						<p className="text-xs text-gray-50/30">
							( All paragraphs are AI generated.)
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HomePage;
