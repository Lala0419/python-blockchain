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
			<h3>Welcome to NaynayChain</h3>
			<section
				// className={`px-6 pb-[15.5rem] md:pb-[22rem] lg:pb-[14rem] max-w-[100vw] h-[50rem]`}
				className={isMobile ? `w-[100vw] h-[30rem]` : `w-[100vw] h-[50rem]`}
			>
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
