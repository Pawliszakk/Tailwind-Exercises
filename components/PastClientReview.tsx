const PastClientReview = () => {
	return (
		<section className="mx-auto max-w-[1200px] my-32">
			<div className="flex  items-center justify-between  mb-16 px-16">
				<span className="uppercase text-md opacity-60 tracking-[0.6em] lg:text-4xl">
					past client
				</span>
				<div className="flex gap-5">
					<div className="h-16 w-16 cursor-pointer bg-gray-300 flex justify-center items-center text-white rounded-full">
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
					<div className="h-16 w-16 cursor-pointer bg-gray-300 flex justify-center items-center text-white rounded-full">
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
			<p className="text-2xl text-center max-w-[80%] px-8 mx-auto sm:text-4xl lg:text-7xl lg:max-w-[90%] xl:text-[50px]">
				“Donnie transformed our brand identity and website into a modern, sleek
				and professional representation of our company. Their design skills are
				second to none”
			</p>
			<div className="flex my-16 ml-16">
				<img
					src="./img/avatar.png"
					alt=""
					className="rounded-full w-16 h-16 "
				/>
				<div className="ml-5">
					<span className="text-3xl font-bold">Joshua Jones</span>
					<span className="block opacity-70 text-xl">
						Psychiatric technican
					</span>
				</div>
			</div>
		</section>
	);
};

export default PastClientReview;
