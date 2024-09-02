import React, { useState, useEffect } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";

const ToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-4 animate-bounce right-4 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
				>
					<HiChevronDoubleUp />
				</button>
			)}
		</div>
	);
};

export default ToTopButton;
