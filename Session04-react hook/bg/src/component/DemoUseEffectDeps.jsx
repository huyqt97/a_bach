import React, { useEffect, useState } from "react";
const tabs = ["posts", "albums", "comments"];
function DemoUseEffectDeps() {
  const [types, setTypes] = useState("posts");
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${types}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [types]);
  console.log(types);
  console.log(post);
  return (
    <div>
      {tabs.map((e) => (
        <button key={e} onClick={() => setTypes(e)}>
          {e}
        </button>
      ))}
      <table border={1}>
        <tr>
          <th>stt</th>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
        </tr>

        {post.map((e, i) => (
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

export default DemoUseEffectDeps;
