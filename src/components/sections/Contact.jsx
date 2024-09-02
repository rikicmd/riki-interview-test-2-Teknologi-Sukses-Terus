import { HiMail, HiOfficeBuilding, HiPhone } from "react-icons/hi";

const Contact = () => {
	return (
		<section id="contact">
			<div className="relative isolate bg-blue-900">
				<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
					<div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
						<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-white">Hubungi Kami</h2>
							<p className="mt-6 text-lg leading-8 text-gray-300">
								Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed
								ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
							</p>
							<dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
								<div className="flex gap-x-4">
									<dt className="flex-none">
										<span className="sr-only">Address</span>
										<HiOfficeBuilding aria-hidden="true" className="h-7 w-6 text-gray-400" />
									</dt>
									<dd>
										Lorem, ipsum dolor.
										<br />
										Lorem, ipsum.
									</dd>
								</div>
								<div className="flex gap-x-4">
									<dt className="flex-none">
										<span className="sr-only">Telephone</span>
										<HiPhone aria-hidden="true" className="h-7 w-6 text-gray-400" />
									</dt>
									<dd>
										<a href="tel:+1 (555) 234-5678" className="hover:text-white">
											Lorem, ipsum dolor.
										</a>
									</dd>
								</div>
								<div className="flex gap-x-4">
									<dt className="flex-none">
										<span className="sr-only">Email</span>
										<HiMail aria-hidden="true" className="h-7 w-6 text-gray-400" />
									</dt>
									<dd>
										<a href="mailto:hello@example.com" className="hover:text-white">
											hello@example.com
										</a>
									</dd>
								</div>
							</dl>
						</div>
					</div>
					<form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
						<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div className="sm:col-span-2">
									<label
										htmlFor="first-name"
										className="block text-sm font-semibold leading-6 text-white"
									>
										Nama
									</label>
									<div className="mt-2.5">
										<input
											id="first-name"
											name="first-name"
											type="text"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
										Email
									</label>
									<div className="mt-2.5">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="phone-number"
										className="block text-sm font-semibold leading-6 text-white"
									>
										Nomor Telepon
									</label>
									<div className="mt-2.5">
										<input
											id="phone-number"
											name="phone-number"
											type="tel"
											autoComplete="tel"
											className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="message"
										className="block text-sm font-semibold leading-6 text-white"
									>
										Pesan
									</label>
									<div className="mt-2.5">
										<textarea
											id="message"
											name="message"
											rows={4}
											className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
								</div>
							</div>
							<div className="mt-8 flex justify-end">
								<button
									type="submit"
									className="rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
								>
									Kirim
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
