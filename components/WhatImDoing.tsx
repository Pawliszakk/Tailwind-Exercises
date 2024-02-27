const WhatImDoing = () => {
	return (
		<section className="bg-neutral-900 w-[90%] max-w-[1200px] mx-auto my-16 rounded-3xl text-white text-center py-16 px-12 uppercase">
			<span className="uppercase text-md opacity-70 tracking-[0.6em] sm:text-xl">
				WHAT I&apos;M DOING
			</span>
			<div className="uppercase text-5xl sm:text-7xl lg:text-[60px]">
				<h2 className="my-10 sm:my-16">branding design</h2>
				<h2 className="my-10 sm:my-16">ui/ux design</h2>
				<h2 className="my-10 sm:my-16">development</h2>
				<h2 className="my-10 sm:my-16">digital marketing</h2>
			</div>
			<div className="xl:flex justify-between items-center">
				{' '}
				<span className="uppercase text-md opacity-70 tracking-[0.6em] sm:text-xl">
					selected project
				</span>
				<div className="hidden xl:flex xl:gap-5">
					<div className="h-16 w-16 cursor-pointer bg-white flex justify-center items-center text-orange-600 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-10 h-10"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5 8.25 12l7.5-7.5"
							/>
						</svg>
					</div>
					<div className="h-16 w-16 cursor-pointer bg-white flex justify-center items-center text-orange-600 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-10 h-10"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m8.25 4.5 7.5 7.5-7.5 7.5"
							/>
						</svg>
					</div>
				</div>
			</div>

			<div className="my-12 rounded-[30px] overflow-hidden relative min-h-[400px]">
				<img
					src="./img/image4.jpeg"
					alt=""
					className="min-h-[400px] object-cover"
				/>

				<div className="absolute bottom-5 left-5 text-3xl text-left p-5">
					<div>
						<h3 className="opacity-70 tracking-[0.6em] my-5">Project</h3>
						<p className="max-w-[200px] leading-[2.5rem] lowercase first-letter:uppercase">
							Designing a Social Media App for the Black Experience
						</p>
					</div>
					<div>
						<h3 className="opacity-70 tracking-[0.6em] my-5 ">Type</h3>
						<p className="my-2  lowercase first-letter:uppercase">
							Branding project
						</p>
						<p className="my-2  lowercase first-letter:uppercase">Web Design</p>
						<p className="my-2  lowercase first-letter:uppercase">
							Mobile Apps
						</p>
					</div>
					<span className="right-5 bottom-5 w-12 h-12 rounded-full mt-5 flex justify-center items-center bg-white text-orange-500 sm:right-10 sm:bottom-10 sm:w-16 sm:h-16">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8  sm:w-12 sm:h-12"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
					</span>
				</div>
			</div>
		</section>
	);
};

export default WhatImDoing;
