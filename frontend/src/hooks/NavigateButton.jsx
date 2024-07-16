import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const NavigateButton = ({ to, children }) => {
	const navigate = useNavigate();

	const handleNavigation = () => {
		navigate(to);
	};

	return (
		<Button variant="danger" onClick={handleNavigation}>
			{children}
		</Button>
	);
};

export default NavigateButton;
