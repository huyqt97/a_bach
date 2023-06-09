import React from "react";
import { useSearchParams } from "react-router-dom";

function Course() {
  // khai báo searchParam
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
      <h2>Search Params</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Course</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>ReactJS</th>
            <th>1200</th>
            <th>
              <button
                onClick={() =>
                  setSearchParam({ course: "reactJS", time: 1200 })
                }
              >
                Detail
              </button>
            </th>
          </tr>
          <tr>
            <th>2</th>
            <th>Java</th>
            <th>1400</th>
            <th>
              <button
                onClick={() => setSearchParam({ course: "Java", time: 1400 })}
              >
                Detail
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <h2>chi tiết khóa học :</h2>
      <p>
        tên khóa học : {searchParam.get("course")} - thời gian:{" "}
        {searchParam.get("time")}
      </p>
    </div>
  );
}

export default Course;
