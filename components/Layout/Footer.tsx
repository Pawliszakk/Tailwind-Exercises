import Link from 'next/link';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-neutral-900 text-white rounded-t-3xl text-center pt-32  ">
			<div className="pb-16 border-b-2 border-gray-800 max-w-[90%] mx-auto lg:max-w-[1200px]">
				<span className="text-center text-7xl lg:text-[50px]">
					Have a Cool Project?
				</span>
				<button className="block my-12 mx-auto bg-gradient-to-b from-orange-300 to-orange-600 px-10 py-4 rounded-[50px] text-4xl hover:scale-95 transition-transform">
					Contact Me
				</button>
			</div>

			<div className="py-16 border-b-2 border-gray-800 max-w-[90%] lg:max-w-[1200px] mx-auto flex justify-center items-center flex-col xl:flex-row xl:justify-between">
				<div className="flex justify-center items-center flex-col my-12">
					<img
						src="./img/avatar.png"
						alt=""
						className="h-64 w-64 rounded-full"
					/>
					<strong className="text-3xl my-5 ">
						Visual Designer Based in Indonesia
					</strong>
				</div>
				<div className="sm:flex sm:justify-between sm:gap-20">
					<div className="flex justify-center items-center flex-col my-5">
						<span className="font-bold text-3xl md:text-4xl lg:my-6 ">
							Navigation
						</span>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							Home
						</Link>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							About
						</Link>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							Expertise
						</Link>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							Work
						</Link>
					</div>
					<div className="flex justify-center items-center flex-col my-5">
						<span className="font-bold text-3xl md:text-4xl lg:my-6 ">
							Services
						</span>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							Branding
						</Link>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							UI/UX Design
						</Link>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							Development
						</Link>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							Digital Marketing
						</Link>
					</div>
					<div className="flex justify-center items-center flex-col my-5">
						<span className="font-bold text-3xl md:text-4xl lg:my-6 ">
							Social Media
						</span>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							Dribbble
						</Link>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							Twitter
						</Link>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							Instagram
						</Link>
						<Link
							className="text-2xl my-2 opacity-80 md:text-3xl lg:my-4"
							href="/#"
						>
							LinkedIn
						</Link>
					</div>
				</div>
			</div>

			<div className="py-16 opacity-50 text-3xl">{year} | Donnie Yen</div>
		</footer>
	);
};

export default Footer;
