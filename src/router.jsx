import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BlankLayout from "./layouts/BlankLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<BlankLayout />}>
			<Route path="/" lazy={() => import("./pages/Home")} />
			<Route path="/login" lazy={() => import("./pages/Login")} />
		</Route>
	)
);

export default router;
