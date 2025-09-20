import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setShowNavbar(currentScrollY < lastScrollY);
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.div
			className="navbar"
			initial={{ y: 0 }}
			animate={{ y: showNavbar ? 0 : -100 }}
			transition={{ duration: 0.6 }}
			style={{
				position: "fixed",
				top: 10,
				justifySelf: "center",
				zIndex: 1000,
			}}
		>
			{" "}
			<div className="navbarContent">
				<div>
					<a href="#">
						<img
							className="logo"
							src="../img/NemoLogo.png"
							alt="Logo"
						/>
					</a>
				</div>
				<div className="navbarLinks">
					<a href="#">Accueil</a>
					<a href="#">Sites</a>
					<a href="#">Activités</a>
					<a href="#">Restaurant</a>
					<a href="#">Webshop</a>
					<a href="#">Événements</a>
					<a href="#">Contact</a>
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
