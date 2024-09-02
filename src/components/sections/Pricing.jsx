import { useState } from "react";
import { classNames } from "../../utils";
import { HiCheck } from "react-icons/hi";
import { Radio, RadioGroup } from "@headlessui/react";

const frequencies = [
	{ value: "monthly", label: "Bulanan", priceSuffix: "/bulan" },
	{ value: "annually", label: "Tahunan", priceSuffix: "/tahun" },
];

const tiers = [
	{
		name: "Basic",
		id: "tier-basic",
		href: "#",
		price: { monthly: "IDR 100.000", annually: "IDR 800.000" },
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, expedita?",
		features: ["Mencatat barang masuk", "Mencatat barang keluar", "Mencatat hasil keuntungan"],
		featured: false,
		cta: "Beli sekarang",
	},
	{
		name: "Business",
		id: "tier-business",
		href: "#",
		price: { monthly: "IDR 200.000", annually: "IDR 1.400.000" },
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, soluta.",
		features: [
			"Mencatat barang masuk dan keluar",
			"Mencatat hasil keuntungan",
			"Dapat menganalisa hasil penjualan dengan CHART",
			"Support 7x24 Jam",
		],
		featured: true,
		cta: "Beli sekarang",
	},
	{
		name: "Entrepreneur",
		id: "tier-entrepreneur",
		href: "#",
		price: { monthly: "IDR 300.000", annually: "IDR 2.000.000" },
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dignissimos.",
		features: [
			"Mencatat barang masuk dan keluar",
			"Mencatat hasil keuntungan",
			"Dapat menganalisa hasil penjualan dengan CHART",
			"Support 7x24 Jam",
			"Export data ke Excel",
			"AI Prediksi penghasilan",
		],
		featured: false,
		cta: "Beli sekarang",
	},
];

const Pricing = () => {
	const [frequency, setFrequency] = useState(frequencies[0]);
	return (
		<section id="pricing">
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Penawaran Kami</h2>
						<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
						Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non
						voluptas in. Explicabo id ut laborum.
					</p>
					<div className="mt-16 flex justify-center">
						<fieldset aria-label="Payment frequency">
							<RadioGroup
								value={frequency}
								onChange={setFrequency}
								className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-blue-200"
							>
								{frequencies.map((option) => (
									<Radio
										key={option.value}
										value={option}
										className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-blue-600 data-[checked]:text-white"
									>
										{option.label}
									</Radio>
								))}
							</RadioGroup>
						</fieldset>
					</div>
					<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{tiers.map((tier) => (
							<div
								key={tier.id}
								className={classNames(
									tier.featured ? "bg-blue-900 ring-blue-900" : "ring-blue-200",
									"rounded-3xl p-8 ring-1 xl:p-10"
								)}
							>
								<h3
									id={tier.id}
									className={classNames(
										tier.featured ? "text-white" : "text-gray-900",
										"text-lg font-semibold leading-8"
									)}
								>
									{tier.name}
								</h3>
								<p
									className={classNames(
										tier.featured ? "text-gray-300" : "text-gray-600",
										"mt-4 text-sm leading-6"
									)}
								>
									{tier.description}
								</p>
								<p className="mt-6 flex items-baseline gap-x-1">
									<span
										className={classNames(
											tier.featured ? "text-white" : "text-gray-900",
											"text-4xl font-bold tracking-tight"
										)}
									>
										{typeof tier.price === "string" ? tier.price : tier.price[frequency.value]}
									</span>
									{typeof tier.price !== "string" ? (
										<span
											className={classNames(
												tier.featured ? "text-gray-300" : "text-gray-600",
												"text-sm font-semibold leading-6"
											)}
										>
											{frequency.priceSuffix}
										</span>
									) : null}
								</p>
								<a
									href={tier.href}
									aria-describedby={tier.id}
									className={classNames(
										tier.featured
											? "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
											: "bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600",
										"mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
									)}
								>
									{tier.cta}
								</a>
								<ul
									role="list"
									className={classNames(
										tier.featured ? "text-gray-300" : "text-gray-600",
										"mt-8 space-y-3 text-sm leading-6 xl:mt-10"
									)}
								>
									{tier.features.map((feature) => (
										<li key={feature} className="flex gap-x-3">
											<HiCheck
												aria-hidden="true"
												className={classNames(
													tier.featured ? "text-white" : "text-gray-600",
													"h-6 w-5 flex-none"
												)}
											/>
											{feature}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
