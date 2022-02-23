import React from "react";
import { Outlet } from "react-router-dom";

export default function ActivityStream() {
  return (
    <div className="activityStream">
      <div class="container">
        <h1 className="text-center mt-5">Assignments</h1>
        <Outlet />
      </div>
    </div>
  );
}