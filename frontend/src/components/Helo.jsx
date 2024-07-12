import { useEffect, useState } from "react";
import { NinjaCanvas } from "./canvas";

const Helo = ({ isMobile }) => {
	const [walletInfo, setWalletInfo] = useState({});

	useEffect(() => {
		fetch("http://localhost:5000/wallet/info")
			.then((res) => res.json())
			.then((json) => setWalletInfo(json));
	}, []);
	return (
		<>
			<h3 className="text-[2.5rem] lg:text-[3rem]">Welcome to NaynayChain</h3>
			<section className="w-[100vw] h-[20rem] sm-h:h-[30rem] md-h:h-[55rem] lg-h:h-[70rem] xl-h:h-[90rem]">
				<NinjaCanvas />
			</section>
			<div className="WalletInfo">
				<div>Address: {walletInfo.address}</div>
				<div>Balance: {walletInfo.balance}</div>
			</div>
		</>
	);
};

export default Helo;
