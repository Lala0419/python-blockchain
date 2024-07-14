import { useEffect, useState } from "react";
import { NinjaCanvas } from "./canvas";
import { API_BASE_URL } from "../config";
import Blockchain from "./Blockchain";

const Helo = ({ isMobile }) => {
	const [walletInfo, setWalletInfo] = useState({});

	useEffect(() => {
		fetch(`${API_BASE_URL}/wallet/info`)
			.then((res) => res.json())
			.then((json) => setWalletInfo(json));
	}, []);

	const { address, balance } = walletInfo;
	return (
		<>
			<h3 className="text-[2.5rem] lg:text-[3rem]">Welcome to NaynayChain</h3>
			<section className="w-[100vw] h-[10rem] sm-h:h-[20rem] md-h:h-[35rem] lg-h:h-[50rem] xl-h:h-[65rem]">
				<NinjaCanvas />
			</section>
			<div className="WalletInfo">
				<div>Address: {address}</div>
				<div>Balance: {balance}</div>
			</div>
			<Blockchain />
		</>
	);
};

export default Helo;
