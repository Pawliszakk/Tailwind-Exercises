const CardsPage = () => {
	return (
		<div className="h-screen flex gap-2 mx-16 justify-center items-center ">
			<div className="relative w-1/4 group">
				<img src="https://unsplash.it/300/500" alt="" className="w-full" />

				<div className="absolute inset-0 bg-black/[.8]"></div>
				<div className="absolute  left-1/2 -translate-x-1/2  w-full p-8  b-0 text-white bottom-0 group-hover:bg-purple-400/50">
					<p className="hidden mb-4 text-xl font-extralight group-hover:block">
						TEKST
					</p>
					<p className="text-xl">
						<span className="text-6xl font-bold">01</span> <br /> Business
						Strategy
					</p>
				</div>
			</div>
			<div className="relative w-1/4 group">
				<img src="https://unsplash.it/300/500" alt="" className="w-full" />

				<div className="absolute inset-0 bg-black/[.8]"></div>
				<div className="absolute  left-1/2 -translate-x-1/2  w-full p-8  b-0 text-white bottom-0 group-hover:bg-indigo-400/50">
					<p className="hidden mb-4 text-xl font-extralight group-hover:block">
						TEKST
					</p>
					<p className="text-xl">
						<span className="text-6xl font-bold">01</span> <br /> Business
						Strategy
					</p>
				</div>
			</div>
			<div className="relative w-1/4 group">
				<img src="https://unsplash.it/300/500" alt="" className="w-full" />

				<div className="absolute inset-0 bg-black/[.8]"></div>
				<div className="absolute  left-1/2 -translate-x-1/2  w-full p-8  b-0 text-white bottom-0 group-hover:bg-purple-400/50">
					<p className="hidden mb-4 text-xl font-extralight group-hover:block">
						TEKST
					</p>
					<p className="text-xl">
						<span className="text-6xl font-bold">01</span> <br /> Business
						Strategy
					</p>
				</div>
			</div>
			<div className="relative w-1/4 group">
				<img src="https://unsplash.it/300/500" alt="" className="w-full" />

				<div className="absolute inset-0 bg-black/[.8]"></div>
				<div className="absolute  left-1/2 -translate-x-1/2  w-full p-8  b-0 text-white bottom-0 group-hover:bg-red-400/50">
					<p className="hidden mb-4 text-xl font-extralight group-hover:block">
						TEKST
					</p>
					<p className="text-xl">
						<span className="text-6xl font-bold">01</span> <br /> Business
						Strategy
					</p>
				</div>
			</div>
		</div>
	);
};

export default CardsPage;
