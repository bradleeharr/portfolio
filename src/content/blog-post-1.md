---
slug: "my-first-blog-post"
date: "2023-08-25"
title: "Gatsby and Katex: Using Markdown to create posts with LaTeX format supported"
---


For a while, I've wanted to create a blog to develop my own personal understanding of concepts through communicating them on a set plaform.

After spending some time hacking through making my own website in HTML and CSS, I ended up being unsatisfied. This approach was laborious and ended up taking extra time to format each tag and style. As I started to add even a few extra pages, the upkeep started to increase. To keep with the increased breadth of possible features and designs, being able to create a website more "modern," a better workflow was required.

I moved on to using **React** which immediately was much cleaner to use, being more dedicated toward the features and reactivity of modern web design. 

Though for the purpose of a blog, I still did not want to have to write HTML and CSS every time I wanted to write a short blurb. What I found as a solution was the ability to write posts in Markdown and then have them automatically formatted into a page. This feature is fairly easily able to be done through the React-based Framework **Gatsby** and using their plugin _gatsby-transformer-remark_

__Using Markdown Content in Gatsby should be easy.__


A bonus feature that I found in Gatsby is the ability to easily use even LaTeX in Markdown directly through another plugin, _gatsby-remark-katex_


To add this specific feaure, it took me personally a few hours of configuration and rebuilding to get this setup to work.  
In order to streamline the process potentially for another person, I reason that a detailed quick set-up guide may be useful for someone else.

* **1. Installing Node.js, React, Katex, and Gatsby**

First, you should install the required runtime, Node.js:

Download [Node.js](https://nodejs.org/en/download)

Using npm, you should then be able to install React:

```npm install react```

Using npm, also install Gatsby, Katex, and the necessary Gatsby plugins _gatsby-transformer-remark_ and gatsby-remark-katex:

```npm install gatsby gatsby-transformer-remark gatsby-remark-katex katex```

You should also have a suitable text editor program, like [Visual Studio Code](https://code.visualstudio.com/).  
* **2. Creating a Project**

* **3. Configuring gatsby-config.js**

* **4. Writing Markdown Latex**

* **5. Writing a template**



Latex? 

The Chu Limit is a theoretical limit for electrically small antennas. It is defined simply as a ratio between an antennas 'Q' factor, the radius, a, of the sphere enclosing the antenna, and the wavenumber k. 
<!-- % https://www.kildal.se/wp-content/uploads/2017/03/Kildal-FoAE-1703-color-Cover.pdf -->

<span class="latex">$Q_{TM} = Q_{TE} = \frac{1}{(ka)^3} + \frac{1}{ka}$</span>


$\bar{x}_3^2 \frac{1}{2}$

$$
\frac{1}{2}
$$

TEST TEST TEST

<span class="latex">TEST WHAT \frac{1}{2} \bar{x}_3^2</span>