import React from "react";
import { Outlet } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      {/* dung de xac dinh vi tri hien thi component */}
      About Page
      <Outlet />
    </div>
  );
}

export default AboutPage;
