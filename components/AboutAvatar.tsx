const AboutAvatar = () => {
	return (
		<section className="max-w-[1200px] mx-auto flex justify-center items-center flex-col px-12 xl:flex-row xl:items-start xl:justify-between ">
			<div>
				<h2 className="text-3xl opacity-70 text-center uppercase tracking-[0.6em] my-12 mb-24 md:text-5xl ">
					About me{' '}
				</h2>
				<img src="./img/avatar.png" alt="" />
			</div>
			<p className="text-4xl max-w-[400px] my-12 opacity-80 md:max-w-[600px] md:text-5xl md:my-16 xl:text-7xl">
				Hi I&apos;m Donnie and I am passionate about everything that has to do
				with Digital Design and Art Direction. I enjoy working with agencies and
				enthusiastic people who want to solve problems through beautiful designs
				and experiences.
			</p>
		</section>
	);
};

export default AboutAvatar;
