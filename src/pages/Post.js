import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import posts from "../data/posts.json";
import "./Post.css";

const Post = () => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  const { title, markdown, links, date } =
    post;

  let [readable, setReadable] = useState({ md: "" });

  useEffect(() => {
    fetch(require(`../assets/markdown/${markdown}`))
      .then((res) => res.text())
      .then((md) => {
        setReadable({ md });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="post">
      <div className="post-container">
        <h1 className="post-title">{title}</h1>
        <div className="post-details-container">
          <div className="left-column">
            <ReactMarkdown children={readable.md}/>
          </div>
          <div className="right-column">
            <p className="post-date">{date}</p>

            <div className="post-links">
              <h3>Related Resources</h3>
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
