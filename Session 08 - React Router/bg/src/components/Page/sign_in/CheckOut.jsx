import React from "react";
import HomePage from "../../HomePage";
import { Navigate } from "react-router-dom";

function CheckOut() {
  // Navigate sử dụng để chuyển trang khi return 1 component
  const isLogin = false;
  return <div>{isLogin ? <HomePage /> : <Navigate to={"./login"} />}</div>;
}

export default CheckOut;
