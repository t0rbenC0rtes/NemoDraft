
import "../styles/Sites.css";

const Sites = () => {
	return (
		<div className="sitesContainer main-container">
			<video 
				className="sitesVideo" 
				src="../vid/underwaterBackground_1.mp4" 
				autoPlay 
				loop 
				muted 
				playsInline
				webkit-playsinline
				preload="auto"
				disablePictureInPicture
				aria-hidden="true"
				tabIndex={-1}
			></video>            
			<div className="main-container">
				<div className="sitesContent">
					<h1>NOS SITES</h1>
					<div className="bruxelles">
                        <h1>Bruxelles</h1>
                        {/* <img src="../img/NemoBruxelles.jpg" alt="Bruxelles" /> */}
						<p>bassin 40 m eau chaude + bassin extérieur froid</p>
					</div>
					<div className="scouffleny">
						<h1>Scouffleny</h1>
                        {/* <img src="../img/NemoScouffleny.jpg" alt="Scouffleny" /> */}
						<p>carrière 15 ha, plongée, SUP, kayak, foodtruck terroir</p>
					</div>
					<div className="geneve">
						<h1>Genève</h1>
						{/* <img src="../img/NemoGeneve.jpeg" alt="Genève" /> */}
						<p>bassin 20 m eau chaude, ambiance familiale</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sites;
