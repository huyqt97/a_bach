// import React, { useEffect, useState } from "react";

// function DemoUseEffedt() {
//   const [text, setText] = useState("");
//   const [count, setCount] = useState(0);
//   //useEffect nhiệm vụ :
//   // callAPI, listen DOM event,update DOM, clearUp
//   // cú pháp:
//   //useEffect(() => {})

//   //   có 2 loại chính:
//   //   1. không có cleanup
//   //   2. có cleanup

//   //trường hợp 1:
//   useEffect(() => {
//     console.log("useEffect đã được chạy");
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   });
//   // tính chất:
//   // Callback luôn được gọi mỗi khi component mount
//   // gọi callback mỗi khi component mount
//   // gọi callback mỗi khi  component re-render
//   //   gọi callback ngay sau khi component được thêm vào DOM
//   //   trường hợp 2:
//   //   useEffect(callback, []);
//   useEffect(() => {
//     console.log("useEffect đã được chạy");
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   }, []);
//   //tính chất
//   //callback luôn được gọi mỗi khi component mount
//   // chỉ gọi callback 1 lần khi component mount

//   //trường hợp 3:
//   //cú pháp
//   //   useEffect(callback, [deps]);
//   // tính chất
//   // callback luôn được gọi mỗi khi component mount
//   // callback được gọi lại mỗi khi deps thay đổi
//   useEffect(() => {
//     console.log("trườn hợp 3");
//   }, [text]);
//   return (
//     <div>
//       <h2>useEffect</h2>
//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>up</button>
//       <button onClick={() => setCount(count - 1)}>down</button>
//       {console.log("re-render")}
//     </div>
//   );
// }

// export default DemoUseEffedt;

import React, { useEffect, useState } from "react";

function DemoUseEffedt() {
  const [data, setDate] = useState([]);
  //B1:  gọi API post: https://jsonplaceholder.typicode.com/posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setDate(json));
  }, []);
  console.log(`data: ${data}}`);
  return (
    <div>
      <h2>Demo Trường hợp 2</h2>

      <table border={1}>
        <tr>
          <th>stt</th>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
        </tr>

        {data.map((e, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.userId}</td>
            <td>{e.id}</td>
            <td>{e.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DemoUseEffedt;
