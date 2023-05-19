import React from "react";
import { useLocation } from "react-router-dom";

function ContactPage() {
  //để nhận được giữ liệu từ product => sử dụng useLocation
  const location = useLocation();
  return (
    <div>
      {location.state === null ? (
        "ContactPge"
      ) : (
        <> count : {location.state.count}</>
      )}
    </div>
  );
}
export default ContactPage;
