import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Grades,
  Calendar,
  ActivityStream,
  Assignments,
  Assignment,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grades" element={<Grades />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/activityStream" element={<ActivityStream />}>
        <Route path="" element={<Assignments />} />
        <Route path=":assignmentSlug" element={<Assignment />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();