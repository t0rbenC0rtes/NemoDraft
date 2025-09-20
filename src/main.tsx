import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Hamburger from "./components/Hamburger.tsx";
import Sites from "./components/Sites.tsx";

const App = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<Hero />
			{windowWidth >= 900 ? <Navbar /> : <Hamburger />}
			<Sites />
		</>
	);
};

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
