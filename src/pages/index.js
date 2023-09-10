import React, { useState, useEffect } from 'react';
import './index.css';
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
        <div className="profile-card">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"></img>
                <p> Hello, I'm Bradlee Harrison.
                    I am an electrical and computer engineer. I have interests in Signal Processing (Radar/Communications), Information Theory, Embedded Systems, and Machine Learning.

                    I received my Bachelor's Degree in Electrical Engineering at the University of Oklahoma in December 2022.

                    I am pursuing a master's in Electrical and Computer Engineering at the University of Oklahoma's Advanced Radar Research Center (planned Dec 2023).

                    I'm always looking to learn more. 
                    </p>
        </div>
        
        <div className="navigation">
            {/*<a href="#blog">Blog</a>
            <a href="#projects">Projects</a> 
            <button onClick={toggleTheme}> Toggle Dark Mode </button> */}
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
                <a href="#post2">
                <div className="post-card">
                    <h3>Artificial Neural Networks for Chess</h3>
                    <p> December 25, 2022 </p>
                    <p>Analysis and implementation of an AI for chess trained on supervised learning from human game data...</p>
                </div>
                </a>
                <a href="#post3"><div className="post-card">
                    <h3>IR Kalman Filter Tracking</h3>
                    <p> December 12, 2022 </p>
                    <p>Using Kalman Filer and YOLOv8 to perform state-of-the-art object tracking...</p>
                </div>
                </a>
            </div>

            <div className="skills-section">
            <h2>My Skills</h2>
            <ul>
                <li>Python</li>
                <li>C/C++</li>
                <li>C#</li>
                <li>Java</li>
                <li>MATLAB</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Gatsby</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
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
            <a href="https://github.com/bradleeharr"><i className="fa fa-github"></i>  GitHub</a>
            <a href="https://linkedin.com/in/bradlee-harrison"><i className="fa fa-linkedin"></i> LinkedIn</a>
        </div>
</footer>

    </div>


 
  );
};

export default Intro;
