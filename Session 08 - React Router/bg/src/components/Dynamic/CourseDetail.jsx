import React from "react";
import { useParams } from "react-router-dom";

function CourseDetail() {
  const param = useParams();
  return (
    <div>
      <h2>khóa học có id là : {param.id}</h2>
    </div>
  );
}

export default CourseDetail;
