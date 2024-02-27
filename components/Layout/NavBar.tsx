import Link from 'next/link';

const NavBar = () => {
	return (
		<header className="h-28 py-5 px-16 shadow flex items-center">
			<nav className="max-w-[1100px] w-full mx-auto flex justify-between items-center">
				<Link href="/">
					<img src="./img/logo.svg" alt="" />
				</Link>

				<img
					className="w-16 cursor-pointer md:hidden"
					src="./img/bars.svg"
					alt=""
				/>

				<ul className="hidden md:flex gap-10 text-3xl uppercase">
					<li>
						<Link className="hover:text-orange-600 transition-colors" href="/#">
							home
						</Link>
					</li>
					<li>
						<Link className="hover:text-orange-600 transition-colors" href="/#">
							about
						</Link>
					</li>
					<li>
						<Link className="hover:text-orange-600 transition-colors" href="/#">
							works
						</Link>
					</li>
					<li>
						<Link className="hover:text-orange-600 transition-colors" href="/#">
							contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
