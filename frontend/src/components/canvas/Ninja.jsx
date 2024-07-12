import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ninja = ({ isMobile }) => {
	const { scene } = useGLTF("./silent_ash/scene.gltf");
	const sceneRef = useRef();

	useFrame(() => {
		if (sceneRef.current) {
			sceneRef.current.rotation.y += 0.005;
		}
	});

	return (
		<mesh>
			<hemisphereLight intensity={2} groundColor="black" />
			<spotLight
				position={[0, 0, 0]}
				angle={1}
				penumbra={0}
				intensity={0}
				castShadow
				shadow-mapSize={100}
			/>
			<pointLight intensity={2} />
			<primitive
				ref={sceneRef}
				object={scene}
				scale={isMobile ? 7 : 6} //do not change this ratio
				position={[0, isMobile ? -3 : -2, 0]}
				rotation={[-0.01, -0, -0.1]}
			/>
		</mesh>
	);
};

const NinjaCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia("(max-width: 100rem)");

		// Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQuery.matches);

		// Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		// Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// Remove the listener when the component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 0, 0], fov: 70 }}
			gl={{ preserveDrawingBuffer: true }}
			className={"w-[100vw] !h-[90vh]"} //canvas size
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Ninja className="cursor-pointer" />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default NinjaCanvas;
