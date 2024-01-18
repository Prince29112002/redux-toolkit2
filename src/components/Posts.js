import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../features/postsSlice";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleNext = () => {
    history("/data");
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Posts;
