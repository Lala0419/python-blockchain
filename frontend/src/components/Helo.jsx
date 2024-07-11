import { NinjaCanvas } from "./canvas";

const Helo = () => {
	return (
		<>
			<section
				className={`px-6 pb-[15.5rem] md:pb-[22rem] lg:pb-[14rem] max-w-[100vw] h-[50rem]`}
			>
				<NinjaCanvas />
			</section>
			<h3>Welcome to NaynayChain</h3>
		</>
	);
};

export default Helo;
