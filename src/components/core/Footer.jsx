import { navigation } from "../../const";

const Footer = () => {
	return (
		<footer className="bg-blue-900 ">
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
				<nav aria-label="Footer" className="-mb-6 flex flex-col items-center lg:flex-row gap-2 justify-center">
					{navigation.map((item) => (
						<div key={item.name} className="pb-6">
							<a href={item.href} className="text-sm leading-6 text-white hover:text-blue-500">
								{item.name}
							</a>
						</div>
					))}
				</nav>

				<p className="mt-10 text-center text-xs leading-5 text-white">
					&copy; 2024 Sistem ERP, Inc. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
