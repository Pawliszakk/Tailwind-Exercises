const About = () => {
	return (
		<section className="bg-neutral-900 w-[90%] max-w-[1200px] mx-auto my-16 rounded-3xl text-white text-center py-16 px-12">
			<h1 className="text-7xl font-bold max-w-[500px] mx-auto lg:text-[60px] lg:max-w-[600px]">
				Visual Designer Based in Indonesia
			</h1>
			<p className="text-2xl my-6 opacity-70 max-w-[400px] mx-auto md:text-3xl md:max-w-[500px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua minim veniam, quis
				nostrud.
			</p>
			<button className="bg-gradient-to-b from-orange-300 to-orange-600 px-10 py-4 rounded-[50px] text-4xl my-8">
				Contact Me
			</button>

			<div className="lg:flex lg:gap-10">
				<div className="relative rounded-3xl overflow-hidden my-12">
					<img src="./img/image1.png" alt="" />
					<span className="absolute bottom-5 left-5 font-bold text-3xl sm:bottom-10 sm:left-10 sm:text-5xl">
						Branding Project
					</span>
					<span className="absolute right-5 bottom-5 w-12 h-12 rounded-full flex justify-center items-center bg-white text-orange-500 sm:right-10 sm:bottom-10 sm:w-16 sm:h-16">
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
				<div className="relative rounded-3xl overflow-hidden  my-12">
					<img src="./img/image2.png" alt="" />
					<span className="absolute bottom-5 left-5 font-bold text-3xl sm:bottom-10 sm:left-10 sm:text-5xl">
						Branding Project
					</span>
					<span className="absolute right-5 bottom-5 w-12 h-12 rounded-full flex justify-center items-center bg-white text-orange-500 sm:right-10 sm:bottom-10 sm:w-16 sm:h-16">
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

export default About;
