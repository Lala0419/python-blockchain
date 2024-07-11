import { NinjaCanvas } from "./canvas";

const Helo = () => {
	return (
		<>
			<h3>Welcome to NaynayChain</h3>
			<section
				className={`px-6 pb-[15.5rem] md:pb-[22rem] lg:pb-[14rem] max-w-[100vw] mx-auto relative z-0 h-[50rem]`}
			>
				<NinjaCanvas />
			</section>
		</>
	);
};

export default Helo;
