import "../styles/Hero.css";

function Hero() {
	return (
		<div className="heroContainer">
			<video className="heroVideo" src="../vid/heroDiverLoop.mp4" autoPlay loop muted></video>
			<div className="main-container">
				<div className="heroContent">
					<div className="hero-title">THE <br /> ORIGINAL <br /> DEEP DIVING <br /> POOL</div>
					<div className="ctaButtons">
						<a className="cta">Réserver un baptême</a>
						<a className="cta">Découvrir nos activités</a>
						<a className="cta">Webshop</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
