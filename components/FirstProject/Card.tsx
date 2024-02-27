const Card = () => {
	return (
		<div className="bg-white w-[375px] rounded-xl overflow-hidden lg:w-[800px] lg:flex lg:flex-row-reverse lg:p-12 lg:gap-10">
			<div>
				<img
					src="./assets1/images/illustration-sign-up-mobile.svg"
					alt="Ilustration of some computer devices"
					className="lg:hidden"
				/>
				<img
					src="./assets1/images/illustration-sign-up-desktop.svg"
					alt="Ilustration of some computer devices"
					className="hidden lg:block"
				/>
			</div>
			<div>
				{' '}
				<div className="px-8 text-[16px] text-charcoalGrey ">
					<h2 className="font-bold text-5xl my-10">Stay Updated!</h2>
					<p className="my-10">
						Join 60,000+ product managers receiving monthly updates on:
					</p>
					<ul>
						<li className="flex gap-4 items-start my-4">
							<img
								src="./assets1/images/icon-list.svg"
								alt="Illustration of some computer devices"
							/>
							Product discovery and building what matters
						</li>
						<li className="flex gap-4 items-start my-4">
							<img
								src="./assets1/images/icon-list.svg"
								alt="Illustration of some computer devices"
							/>
							Measuring to ensure updates are a success
						</li>
						<li className="flex gap-4 items-start my-4">
							<img
								src="./assets1/images/icon-list.svg"
								alt="Illustration of some computer devices"
							/>{' '}
							And much more!
						</li>
					</ul>
				</div>
				<div className="p-6">
					<form className="flex flex-col items-start my-2">
						<label htmlFor="email" className="font-bold my-2">
							Email address
						</label>
						<input
							className="rounded-lg border border-indigo-200 p-5
                w-full text-[16px]"
							type="email"
							id="email"
							name="email"
							placeholder="email@company.com"
						/>
						<button
							className="bg-darkSlateGrey text-white px-6 py-4 rounded-lg w-full my-6 text-[16px] hover:bg-charcoalGrey transition-colors"
							type="submit"
						>
							Subscribe to monthly newsletter
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Card;
