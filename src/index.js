import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.js";

ReactDOM.render(
	<App />,

  document.getElementById("root")
);

serviceWorker.unregister();