import React from 'react';
import { Link, graphql, navigate } from 'gatsby'; // Import navigate
import "./index.css"; // Importing our custom CSS

const BlogListing = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div className="blog-listing">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button> {/* Added Back Button */}
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
        <Link to={`/blog/${post.node.frontmatter.slug}`}>
          <button className = "nav-button">
          <li key={post.node.frontmatter.slug}>
              {post.node.frontmatter.title}
          </li>
          </button> <br/>
          </Link>

        ))}
      </ul>
    </div>
  );
};

export default BlogListing;


export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
