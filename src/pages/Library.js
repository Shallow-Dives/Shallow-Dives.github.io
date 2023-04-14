import React from "react";
import { Link } from "react-router-dom";
import "./Library.css";
import postsData from "../data/posts.json";

function Library() {
  const posts = postsData.map((post) => (
    <Link
      to={`/post/${post.id}`}
      key={post.id}
      className="library-card"
    >
      <div className="library-card-content">
        <h2 className="library-card-title">{post.title}</h2>
      </div>
    </Link>
  ));

  return (
    <div className="library-container">
      <h1 className="library-title">Selected posts</h1>
      <div className="library-grid">{posts}</div>
    </div>
  );
}

export default Library;
