import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { HiMenu, HiUserCircle, HiX } from "react-icons/hi";
import { Pricing, About, Contact } from "../components/sections";
import { Footer, ToTopButton } from "../components/core";
import { navigation } from "../const";
import { Link } from "react-router-dom";

export function Component() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<main className="overflow-x-hidden">
			<section id="hero" className="relative py-8 w-screen">
				<img src="/images/waveleft.webp" className="absolute -z-10 -left-32 -top-10" />
				<img
					src="/images/waveright.webp"
					className="absolute w-[600px] lg:w-[800px] z-10 -right-80 -bottom-40"
				/>
				<div className="container mx-auto ">
					<header className="absolute inset-x-0 top-0 z-50">
						<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
							<div className="flex lg:flex-1">
								<a
									href="#"
									className="-m-1.5 p-1.5 text-white flex items-center gap-2 font-medium text-2xl"
								>
									<span className="sr-only">HOME</span>
									<HiUserCircle className="text-4xl" />
									HOME
								</a>
							</div>
							<div className="flex lg:hidden">
								<button
									type="button"
									onClick={() => setMobileMenuOpen(true)}
									className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
								>
									<span className="sr-only">Open main menu</span>
									<HiMenu />
								</button>
							</div>
							<div className="hidden lg:flex lg:gap-x-12 lg:items-center">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-sm font-semibold leading-6 text-gray-900"
									>
										{item.name}
									</a>
								))}
								<div className="hidden lg:flex lg:flex-1 lg:justify-end">
									<Link
										to="/login"
										className="text-sm font-semibold leading-6 px-3 py-1 rounded-lg bg-blue-500 text-white"
									>
										Log in <span aria-hidden="true">&rarr;</span>
									</Link>
								</div>
							</div>
						</nav>
						<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
							<div className="fixed inset-0 z-50" />
							<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
								<div className="flex items-center justify-between">
									<a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 text-lg font-medium">
										<span className="sr-only">HOME</span>
										<HiUserCircle className="text-4xl" />
										HOME
									</a>
									<button
										type="button"
										onClick={() => setMobileMenuOpen(false)}
										className="-m-2.5 rounded-md p-2.5 text-gray-700"
									>
										<span className="sr-only">Close menu</span>
										<HiX />
									</button>
								</div>
								<div className="mt-6 flow-root">
									<div className="-my-6 divide-y divide-gray-500/10">
										<div className="space-y-2 py-6">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</a>
											))}
										</div>
										<div className="py-6">
											<Link
												to="/login"
												className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												Log in
											</Link>
										</div>
									</div>
								</div>
							</DialogPanel>
						</Dialog>
					</header>

					<div className="mt-40 text-center flex items-end justify-center lg:pl-72">
						<p className="w-3/4 lg:w-1/2 bg-[#bfc2cb63] lg:bg-transparent px-6 py-4 rounded-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis porro maxime minima
							assumenda, sit id sequi veritatis earum nesciunt quidem qui, repellendus accusamus nobis
							enim quam expedita incidunt adipisci.
						</p>
					</div>

					<div className="py-20">
						<p className="pl-20 text-2xl italic">"Lorem ipsum dolor sit amet."</p>
						<img src="/images/hero.webp" className="w-[500px] pl-10 relative z-10" />
					</div>
				</div>
			</section>

			<About />

			<Pricing />

			<Contact />

			<Footer />

			<ToTopButton />
		</main>
	);
}
