import React, { useState } from "react";

function Bth_6() {
  const [doi, setDoi] = useState({ h1: "", h2: "", number: null });
  const [sum, setSum] = useState("");
  const handleSelect = (e) => {
    const { name, value } = e.target;
    setDoi({ ...doi, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { h1, h2, number } = doi;
    if (h1 === "" || h2 === "") {
      alert("chưa chọn quy đổi");
    }
    if (h1 === h2) {
      setSum(number);
    } else {
      if (h1 === "c" && h2 === "f") {
        setSum(number * (9 / 5) + 32);
      } else if (h1 === "f" && h2 === "c") {
        setSum((number - 32) / (9 / 5));
      }
    }
  };
  return (
    <div>
      <h2>
        [Thực hành] 6. Sử dụng react hook tạo ứng dụng chuyển đổi nhiệt độ
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Từ :</label>
        <input
          type="number"
          onChange={handleSelect}
          value={doi.number}
          name="number"
        />
        <select name="h1" id="" onChange={handleSelect} value={doi.h1}>
          <option value="">-Từ-</option>
          <option value="c">Độ C</option>
          <option value="f">Độ F</option>
        </select>
        <select name="h2" id="" onChange={handleSelect} value={doi.h2}>
          <option value="">-Sang-</option>
          <option value="f">Độ F</option>
          <option value="c">Độ C</option>
        </select>
        <button>comfirm</button>
        <p
          style={{
            backgroundColor: "#699caf",
            padding: "5px",
            border: "1px solid black",
            width: "200px",
            margin: "auto",
            color: "#fff",
            marginTop: "20px",
            height: "40px",
          }}
        >
          {sum}
        </p>
      </form>
    </div>
  );
}

export default Bth_6;
