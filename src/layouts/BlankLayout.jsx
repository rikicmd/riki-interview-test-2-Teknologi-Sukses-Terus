import { Outlet } from "react-router-dom";
import { Footer } from "../components/core";

const BlankLayout = () => {
	return (
		<>
			<Outlet />
			{/* <Footer /> */}
		</>
	);
};

export default BlankLayout;
