import React from "react";
import { useParams } from "react-router-dom";

function CourseTypeid() {
  const param = useParams();
  return (
    <div>
      <h2>chi tiết khóa học :</h2>
      <p>
        khóa học có id :{param.id} có type là :{param.type}
      </p>
    </div>
  );
}

export default CourseTypeid;
