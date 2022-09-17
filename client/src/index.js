import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		<div className="bg-black m-0 p-auto h-96 mx-auto"></div>
	</React.StrictMode>
);
