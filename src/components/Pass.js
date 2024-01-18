import React from "react";
import { useSelector } from "react-redux";

function Pass() {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <div>
      {posts &&
        posts.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.title}</li>
            </div>
          );
        })}
    </div>
  );
}

export default Pass;
