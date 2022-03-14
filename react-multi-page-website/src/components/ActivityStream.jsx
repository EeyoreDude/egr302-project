import React from "react";
import { Navigation, Footer } from "./pageExports";

export default function ActivityStream() {
  return (
    <div className="activityStream">
      <Navigation />
      <div class="container">
        <h1 className="text-center mt-5">Activity Stream</h1>
      </div>
      <Footer />
    </div>
  );
}