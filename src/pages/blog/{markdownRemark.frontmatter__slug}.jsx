import React, { useEffect } from "react";
import { graphql } from "gatsby";
import katex from "katex";
import "katex/dist/katex.min.css";
import "./blog-template.css" // Importing our custom CSS

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
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
  }
`