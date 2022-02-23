import React, { useEffect } from "react";
import { useParams } from "react-router";

export default function Assignment() {
  let { assignmentSlug } = useParams();

  useEffect(() => {
    // Fetch Assignment using the AssignmentSlug
  }, [assignmentSlug]);

  return (
    <div className="assignment">
      <div class="container">
        <h1 className="mt-5">Assignment Title</h1>
        <h6 className="mb-5">The assignment slug is, {assignmentSlug}</h6>
        <p>
          Text paragraph 1
        </p>
        <p>
          Text paragraph 2
        </p>
        <p>
          Text paragraph 3
        </p>
      </div>
    </div>
  );
}