---
slug: "my-first-blog-post"
date: "2023-08-25"
title: "Gatsby and Katex: Using Markdown to create posts with LaTeX format supported"
---


For a while, I've wanted to create a blog to develop my own personal understanding of concepts through communicating them on a set plaform.

After spending some time hacking through making my own website in HTML and CSS, I ended up being unsatisfied. This approach was laborious and ended up taking extra time to format each tag and style. As I started to add even a few extra pages, the upkeep started to increase. To keep with the increased breadth of possible features and designs, being able to create a website more "modern," a better workflow was required.

I moved on to using [**React**](https://react.dev/) which immediately was much cleaner to use, being more dedicated toward the features and reactivity of modern web design. 

Though for the purpose of a blog, I still did not want to have to write HTML and CSS every time I wanted to write a short blurb. What I found as a solution was the ability to write posts in Markdown and then have them automatically formatted into a page. This feature is fairly easily able to be done through the React-based Framework [**Gatsby**](https://www.gatsbyjs.com/) and using their plugin [_gatsby-transformer-remark_](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/)

A bonus feature that I found in Gatsby is the ability to easily use even LaTeX in Markdown directly through another plugin, [_gatsby-remark-katex_](https://www.gatsbyjs.com/plugins/gatsby-remark-katex/).


To add this specific feaure, it took me personally a few hours of configuration and rebuilding to get this setup to work.  

Now, smoothly and surely, I can add equations to markdown and implement them as posts, like this current post:

# Example:
>__Inline Equation__:
>The Chu Limit, a theoretical limit for electrically small antennas,<!-- % https://www.kildal.se/wp-content/uploads/2017/03/Kildal-FoAE-1703-color-Cover.pdf --> is defined simply as a ratio between an antennas $Q$ factor, the radius, $a$, of the sphere enclosing the antenna, and the wavenumber $k$. The equation amounts to $Q = \frac{1}{(ka)^3} + \frac{1}{ka}$
> > Wrap a statement in a single '$' in order to create an inline equation.

> >```
> >...a ratio between an antennas $Q$ factor, the radius, $a$, of the sphere enclosing the antenna, and the wavenumber $k$.
> >The equation amounts to $Q = \frac{1}{(ka)^3} + \frac{1}{ka}$
> > ```

>__Block equation__:
> $$
> Q_{TM} = Q_{TE} = \frac{1}{(ka)^3} + \frac{1}{ka}
> $$

>> Wrap a statement in '\$\$' in order to create a block equation. Note the need for the spacing before and after the starting and ending \$\$.

>>```
>>$$
>>Q_{TM} = Q_{TE} = \frac{1}{(ka)^3} + \frac{1}{ka} 
>>$$
>>```

# Set-up Guide 
To potentially streamline the process for another person, I reason that a detailed quick set-up guide may be useful.

* **1. Installing Node.js, React, KaTeX, and Gatsby**

First, you should install the required runtime, Node.js:

Download [Node.js](https://nodejs.org/en/download)

Using npm, install Gatsby globally:

```npm install -g gatsby-cli```

Now, create a project and install the necessary plugins KaTeX, _gatsby-transformer-remark_ and _gatsby-remark-katex_:

In a terminal, navigate to the directory you want to start a project in and enter:

```gatsby new projectname```

Followed by

```cd projectname```

to move into the project directory.

Now install _gatsby-transformer-remark_, _gatsby-remark-katex_, and katex:

```npm install gatsby-source-filesystem```

```npm install gatsby-transformer-remark gatsby-remark-katex katex```

```npm install remark-math rehype-katex```

Then, verify that the project starts correctly:

```gatsby develop```

You should then be able to visit the sample page at http://localhost:8000/

Now that a new gatsby project is set up, the next step is to edit the configuration files, add markdown pages, and create a javascript template: 
You should have a suitable text editor program, like [Visual Studio Code](https://code.visualstudio.com/).  

* **3. Configuring gatsby-config.js**
The gatsby-config.js should be stored in the root of your new project directory. Edit this file

Your 'gatsby-source-filesystem', should be configured to the path that your markdown files will be stored.
You should also add the plugins 'gatsby-transformer-remark' and 'gatsby-remark-katex'.

An example is shown below:

**gatsby-config.js**
```
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby KaTeX Starter`,
    description: `Configuration with Remark and KaTeX.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
  {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content/`,
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      excerpt_separator: `<!-- end -->`,
      plugins: [
        {
          resolve: "gatsby-remark-katex",
          options: {
            strict: "ignore"
          }
        },
      ]
    }
  },
  ]
}
```
* **4. Writing Markdown LaTeX**
Now, in the src/content folder, [or the path that you configure your file root for the gatsby-source-filesystem], add a markdown file that uses LaTeX.
Here is an example:

**src/content/blog-post-1.md**
``` 
---
slug: "my-first-blog-post"
date: "2023-08-25"
title: "Gatsby and KaTeX: Using Markdown to create posts with LaTeX format supported"
---
Test Markdown KaTeX:

Euler's identity $e^{i\pi} = -1$ comes from the more general equation:

$$
e^{ix} = \frac{1}{2}[\cos{x} + i\sin{x}]
$$
```

* **5. Writing a template**
Finally, you need to have a javascript template for your markdown files. 
An example:
**pages/blog/{markdownRemark.frontmatter__slug}.jsx**
```
import React, { useEffect } from "react";
import { graphql } from "gatsby";
import katex from "katex";
import "katex/dist/katex.min.css"; // Important. This is what renders the LaTeX
//import "./blog-template.css" // Importing custom CSS goes here

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
// HTML Formatting and labeling for template
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
// GraphQL Query which grabs the content from your markdown file
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
```
* **6. Start Development Server**
If the configuration is correct, you should now be able to run your development server again. In a terminal enter:

```gatsby develop```

Now you should be able to visit the sample page at http://localhost:8000/ and also your blog post at http://localhost:8000/blog/my-first-blog-post/






