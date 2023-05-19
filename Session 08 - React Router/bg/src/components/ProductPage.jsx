import React from "react";
import { useNavigate } from "react-router-dom";
function ProductPage() {
  // userNavigate là 1 hook trong react-router-dom
  const navigate = useNavigate();
  return (
    <div>
      {/* useNavigate dùng để điều hướng trang */}
      <button onClick={() => navigate("/contact")}>CLick Me!!!</button>
      {/*useNavigate voed History */}
      <button onClick={() => navigate(-2)}> Go To Bách Bách</button>
      <button onClick={() => navigate(-1)}> Go To Bách</button>
      <button onClick={() => navigate(1)}> Go To Tiến</button>
      <button onClick={() => navigate(2)}> Go To Tiến Tiến </button>
      {/* useNavigate với replace */}
      {/* khi sử dụng useNavigate với replace sẽ giống với hi điều hướng trang nhưng nếu replace = true thì sẽ không lưu lại history */}
      <button onClick={() => navigate("/contact", { replace: true })}>
        CLick Me!!!
      </button>
      {/* useNavigate để chuyển dữ liệu  */}
      <button
        onClick={() =>
          navigate("/contact", {
            state: {
              count: 10,
            },
          })
        }
      >
        Go to contact with data!
      </button>
    </div>
  );
}

export default ProductPage;
