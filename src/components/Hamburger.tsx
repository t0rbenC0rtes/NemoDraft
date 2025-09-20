import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "../styles/Hamburger.css";

const Hamburger = () => {
	const [showHamburger, setShowHamburger] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setShowHamburger(currentScrollY < lastScrollY);
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<>
			<motion.div
				className="hamburger-header"
				initial={{ y: 0 }}
				animate={{ y: showHamburger ? 0 : -100 }}
				transition={{ duration: 0.6 }}
				style={{
					position: "fixed",
					top: 10,
					left: 10,
					zIndex: 1001,
				}}
			>
				<div className="hamburger-content">
					<a href="#">
						<img
							className="hamburger-logo"
							src="../img/NemoLogo.png"
							alt="Logo"
						/>
					</a>
					<button
						className="hamburger-button"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isOpen ? <IoMdClose size={24} /> : <RxDropdownMenu size={24} />}
					</button>
				</div>
			</motion.div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="hamburger-menu"
						initial={{ opacity: 0, y: -60 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -60 }}
						transition={{ duration: 0.3 }}
						style={{
							position: "fixed",
							top: 80,						
							right: "4%",
							zIndex: 1000,
						}}
					>
						<nav className="hamburger-nav">
							<a href="#" onClick={closeMenu}>Accueil</a>
							<a href="#" onClick={closeMenu}>Sites</a>
							<a href="#" onClick={closeMenu}>Activités</a>
							<a href="#" onClick={closeMenu}>Restaurant</a>
							<a href="#" onClick={closeMenu}>Webshop</a>
							<a href="#" onClick={closeMenu}>Événements</a>
							<a href="#" onClick={closeMenu}>Contact</a>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Hamburger;