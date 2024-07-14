import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import history from "./history";
import "./index.css";
import Blockchain from "./components/Blockchain";
import ConductTransaction from "./components/ConductTransaction";
import TransactionPool from "./components/TransactionPool";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router history={history}>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/blockchain" element={<Blockchain />} />
			<Route path="/conduct-transaction" element={<ConductTransaction />} />
			<Route path="/transaction-pool" element={<TransactionPool />} />
		</Routes>
	</Router>
);

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
