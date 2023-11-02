import React, { useEffect } from "react";
import { graphql, Link } from 'gatsby';
import { navigate } from 'gatsby'; // Import navigate

//import katex from "katex";
import "katex/dist/katex.min.css";
import "./blog-template.css" // Importing our custom CSS

export default function BlogPostTemplate({ data }) {
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  
const posts = allMarkdownRemark.edges;
const currentPostIndex = posts.findIndex(
  post => post.node.frontmatter.slug === frontmatter.slug
);

const previousPost = posts[currentPostIndex + 1];
const nextPost = posts[currentPostIndex - 1];

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
return (
  <><div className="blog-layout">
    {/* <div className="sidebar">
    
  </div> */}
  <div className="blog-post-container">
  <button onClick={() => navigate(-1)} className="back-button">← Back</button> {/* Added Back Button */}

      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="blog-post-navigation">
        {/*previousPost && (
          <Link to={"../"+previousPost.node.frontmatter.slug}>
          <div className="nav-button">
              ← {previousPost.node.frontmatter.title}
          </div>
          </Link>

        )*/}
        
        <Link to="../../">
        <div className="nav-button home-button back-button">
        Home
        </div>
        </Link>

        {/*nextPost && (
          <Link to={"../"+nextPost.node.frontmatter.slug}>
          <div className="nav-button">
              {nextPost.node.frontmatter.title} →
          </div>
          </Link>

        )*/}
      </div>
    </div>

</div>
</>
  
  );
}

export const pageQuery = graphql`
query($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        frontmatter {
          slug
          title
        }
      }
    }
  }
}
`;