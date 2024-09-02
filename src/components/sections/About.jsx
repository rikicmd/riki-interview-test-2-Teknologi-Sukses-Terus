import { HiCloud, HiLockClosed, HiServer } from "react-icons/hi";

const features = [
	{
		name: "Lorem, ipsum dolor sit amet",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: "HiCloud",
	},
	{
		name: "Eius, iusto optio? Molestiae",
		description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
		icon: "HiLockClosed",
	},
	{
		name: "iure magni quisquam architecto aut",
		description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: "HiServer",
	},
];

const IconFeatures = ({ icon = "HiCloud" }) => {
	switch (icon) {
		case "HiCloud":
			return <HiCloud />;
		case "HiLockClosed":
			return <HiLockClosed />;
		case "HiServer":
			return <HiServer />;
	}
};

const About = () => {
	return (
		<>
			<section id="about" className="pt-10 relative ">
				<img
					src="/images/waveright.webp"
					className="absolute w-[300px] md:w-[400px] -z-10 -left-64 top-64 md:top-auto md:bottom-0"
				/>
				<div className="overflow-hidden  py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
							<div className="lg:pr-8 lg:pt-4">
								<div className="lg:max-w-lg">
									<h2 className="text-base font-semibold leading-7 text-blue-500">About</h2>
									<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
										Sistem ERP
									</p>
									<p className="mt-6 text-lg leading-8 text-gray-600">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
										perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
									</p>
									<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
										{features.map((feature) => (
											<div key={feature.name} className="relative pl-9">
												<dt className="inline font-semibold text-gray-900">
													<IconFeatures icon={feature.icon} /> {feature.name}
												</dt>{" "}
												<dd className="inline">{feature.description}</dd>
											</div>
										))}
									</dl>
								</div>
							</div>
							<img
								alt="Product"
								src="/images/crm.webp"
								width={2432}
								height={1442}
								className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
							/>
						</div>
					</div>
				</div>
			</section>

			<section id="CTA">
				<div className="bg-white">
					<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
						<div className="relative isolate overflow-hidden bg-blue-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
							<div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
								<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
									Lorem, ipsum dolor.
									<br />
									Lorem ipsum dolor sit.
								</h2>
								<p className="mt-6 text-lg leading-8 text-gray-300">
									Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
									sagittis vel nulla.
								</p>
								<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
									<a
										href="#"
										className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
									>
										Get started
									</a>
									<a href="#" className="text-sm font-semibold leading-6 text-white">
										Learn more <span aria-hidden="true">→</span>
									</a>
								</div>
							</div>
							<div className="relative mt-16 h-80 lg:mt-8">
								<img
									alt="App screenshot"
									src="/images/erp.webp"
									width={1824}
									height={1080}
									className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
