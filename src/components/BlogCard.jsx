import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div
      className="card h-100 position-relative border-0  blog-card overflow-hidden"
    >
      <div className="image-container position-relative">
        <img
          src={blog.imageurl}
          alt={blog.title}
          className="card-img-top"
          style={{
            height: "230px",
            objectFit: "cover",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
      </div>

      <div className="card-body text-light text-center px-3 pb-4">
        <h5 className="card-title " style={{ color: "#00f0ff" }}>
          {blog.title}
        </h5>
        <p className="card-text small ">{blog.description}</p>
      </div>

      <Link
        to={`/blog/${blog.id}`}
        className="stretched-link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}

export default BlogCard;
