import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="card h-100 p-0">
      <img
        src={blog.imageurl}
        alt={blog.title}
        className="card-img-top"
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.description}</p>
      </div>
      <Link to={`/blog/${blog.id}`} className="stretched-link" />
    </div>
  );
}

export default BlogCard;
