export default function Home() {
	return (
		<>
			<div className="w-[375px]  bg-veryDarkBlue BOX px-8 py-16 rounded-lg lg:w-[1000px] xl:w-[1100px] lg:flex lg:justify-around">
				<div className=" bg-darkBlue rounded-3xl">
					<div className="flex items-center justify-center gap-4 bg-indigo-500 rounded-3xl px-8 py-14">
						<img
							src="./images/image-jeremy.png"
							alt="User profile image"
							className="h-32 border-2 border-white rounded-full"
						/>
						<div className="text-white">
							<span className="opacity-70 text-2xl">Report for</span>
							<span className="block text-4xl font-thin my-2">
								Jeremy Robson
							</span>
						</div>
					</div>
					<div className="px-4 py-8 capitalize text-white flex justify-around text-2xl">
						<button className="opacity-50">Daily</button>
						<button>Weekly</button>
						<button className="opacity-50">Monthly</button>
					</div>
				</div>

				<div>
					{' '}
					<div className="lg:flex lg:gap-5 lg:justify-between">
						{' '}
						<div className="min-h-64 bg-work rounded-3xl my-16 relative overflow-hidden flex items-end ">
							<img
								src="./images/icon-work.svg"
								alt=""
								className="absolute right-5 top-[-10px] z-0"
							/>
							<div className="bg-darkBlue  w-full text-white z-10 py-8 rounded-3xl">
								<div className="flex justify-between px-8 mt-6">
									<h3 className="text-3xl">Work</h3>{' '}
									<button>
										<img src="./images/icon-ellipsis.svg" alt="" />
									</button>
								</div>
								<div className="flex justify-between items-center px-8 mt-6">
									<span className="text-5xl">32hrs</span>
									<p className="opacity-50 text-xl">
										Last Week - <span>36hrs</span>
									</p>
								</div>
							</div>
						</div>
						<div className="min-h-64 bg-play rounded-3xl my-16 relative overflow-hidden flex items-end">
							<img
								src="./images/icon-play.svg"
								alt=""
								className="absolute right-5 top-[-10px] z-0"
							/>
							<div className="bg-darkBlue  w-full text-white z-10 py-8 rounded-3xl">
								<div className="flex justify-between px-8 mt-6">
									<h3 className="text-3xl">Work</h3>{' '}
									<button>
										<img src="./images/icon-ellipsis.svg" alt="" />
									</button>
								</div>
								<div className="flex justify-between items-center px-8 mt-6">
									<span className="text-5xl">32hrs</span>
									<p className="opacity-50 text-xl">
										Last Week - <span>36hrs</span>
									</p>
								</div>
							</div>
						</div>
						<div className="min-h-64 bg-study rounded-3xl my-16 relative overflow-hidden flex items-end">
							<img
								src="./images/icon-study.svg"
								alt=""
								className="absolute right-5 top-[-10px] z-0"
							/>
							<div className="bg-darkBlue  w-full text-white z-10 py-8 rounded-3xl">
								<div className="flex justify-between px-8 mt-6">
									<h3 className="text-3xl">Work</h3>{' '}
									<button>
										<img src="./images/icon-ellipsis.svg" alt="" />
									</button>
								</div>
								<div className="flex justify-between items-center px-8 mt-6">
									<span className="text-5xl">32hrs</span>
									<p className="opacity-50 text-xl">
										Last Week - <span>36hrs</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:flex lg:gap-5">
						{' '}
						<div className="min-h-64 bg-exercise rounded-3xl my-16 relative overflow-hidden flex items-end">
							<img
								src="./images/icon-exercise.svg"
								alt=""
								className="absolute right-5 top-[-10px] z-0"
							/>
							<div className="bg-darkBlue  w-full text-white z-10 py-8 rounded-3xl">
								<div className="flex justify-between px-8 mt-6">
									<h3 className="text-3xl">Work</h3>{' '}
									<button>
										<img src="./images/icon-ellipsis.svg" alt="" />
									</button>
								</div>
								<div className="flex justify-between items-center px-8 mt-6">
									<span className="text-5xl">32hrs</span>
									<p className="opacity-50 text-xl">
										Last Week - <span>36hrs</span>
									</p>
								</div>
							</div>
						</div>
						<div className="min-h-64 bg-social rounded-3xl my-16 relative overflow-hidden flex items-end">
							<img
								src="./images/icon-social.svg"
								alt=""
								className="absolute right-5 top-[-10px] z-0"
							/>
							<div className="bg-darkBlue  w-full text-white z-10 py-8 rounded-3xl">
								<div className="flex justify-between px-8 mt-6">
									<h3 className="text-3xl">Work</h3>{' '}
									<button>
										<img src="./images/icon-ellipsis.svg" alt="" />
									</button>
								</div>
								<div className="flex justify-between items-center px-8 mt-6">
									<span className="text-5xl">32hrs</span>
									<p className="opacity-50 text-xl">
										Last Week - <span>36hrs</span>
									</p>
								</div>
							</div>
						</div>
						<div className="min-h-64 bg-selfCare rounded-3xl my-16 relative overflow-hidden flex items-end">
							<img
								src="./images/icon-self-care.svg"
								alt=""
								className="absolute right-5 top-[-10px] z-0"
							/>
							<div className="bg-darkBlue  w-full text-white z-10 py-8 rounded-3xl">
								<div className="flex justify-between px-8 mt-6">
									<h3 className="text-3xl">Work</h3>{' '}
									<button>
										<img src="./images/icon-ellipsis.svg" alt="" />
									</button>
								</div>
								<div className="flex justify-between items-center px-8 mt-6">
									<span className="text-5xl">32hrs</span>
									<p className="opacity-50 text-xl">
										Last Week - <span>36hrs</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
