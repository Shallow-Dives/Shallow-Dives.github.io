import React from "react";
import { Link } from "react-router-dom";

import "../components/Library.css";
import "../components/Explainer.css";

import postsData from "../data/logs.json";

function Logs() {
  const posts = postsData.map((post) => (
    <Link
      to={`/post/${post.id}`}
      key={post.id}
      className="library__card">
      <div className="library__card-content">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </Link>
  ));

  return (
    <div className="library__container">
      <div className="explainer">
        <h1>Logs</h1>
        <h3>A collection of takeaways from experimenting with educational experiences to present technical topics.</h3>
      </div>
      <div className="library__listing">{posts}</div>
    </div>
  );
}

export default Logs;
