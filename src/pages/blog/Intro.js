import React, { useState, useEffect } from 'react';
import './Intro.css';
import 'font-awesome/css/font-awesome.min.css';

const Intro = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const [theme, setTheme] = useState('light');  // default to dark theme
    
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

  return (
    <div className="intro">
        <h1>Bradlee Harrison</h1>
        <p>Electrical/Computer Engineer and Software Developer</p>

        <div className="navigation">
            <a href="#blog">Blog</a>
            <a href="#projects">Projects</a>
            <button onClick={toggleTheme}> Toggle Dark Mode </button>
        </div>

        <div className="profile-card">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"></img>
                <p> I am an electrical and computer engineer. I have interests in Signal Processing, Embedded Systems, and Machine Learning. I received my Bachelor's Degree in Electrical Engineering at the University of Oklahoma in December 2022. Now I am pursuing a master's in Electrical and Computer Engineering at the University of Oklahoma and performing research at the university's Advanced Radar Research Center. </p>
        </div>
        <div className="content-grid">
            <div className="latest-posts">
                <h2>Latest Blog Posts</h2>
                <a href="/blog/my-first-blog-post/#">
                    <div className="post-card">
                        <h3>Gatsby and Katex</h3>
                        <p> August 25, 2023 </p>
                        <p>Using Markdown to create posts with LaTeX format supported...</p>
                    </div>
                </a>
                <div className="post-card">
                    <h3><a href="#post2">Example Card</a></h3>
                    <p>Summary of the post...</p>
                </div>
                <div className="post-card">
                    <h3><a href="#post3">Example Cards</a></h3>
                    <p>Summary of the post...</p>
                </div>
            </div>

            <div className="skills-section">
            <h2>My Skills</h2>
            <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Gatsby</li>
                <li>Python</li>
                <li>C/C++</li>
                <li>C#</li>
                <li>Java</li>
            </ul>
            </div>

            <div className="skills-section">
            <h2>My Experience</h2>
            <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Python</li>
            </ul>
            </div>
        </div>

        <div className="contact-section">
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
            </div>
        <footer>
        <p>© 2023 Bradlee Harrison</p>
        <div className="social-links">
            <a href="https://github.com/bradleeharr"><i className="fa fa-github"></i> GitHub</a>
            <a href="https://linkedin.com/in/bradlee-harrison"><i className="fa fa-linkedin"></i> LinkedIn</a>
        </div>
</footer>

    </div>


 
  );
};

export default Intro;
