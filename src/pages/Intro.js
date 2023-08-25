import React, { useState, useEffect } from 'react';
import './Intro.css';

const Intro = () => {
    
    const [theme, setTheme] = useState('dark');  // default to dark theme
    
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
        <div className="navbar">
            <a href="#home">Home</a>
            <a href="#blog">Blog</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>

        <h1>Bradlee Harrison</h1>
        
        <div className="navigation">
        <a href="#blog">Blog</a>
        <a href="#projects">Projects</a>
        <button onClick={toggleTheme}>
    Toggle Dark Mode
</button>
        </div>
        <div className="profile-card">
            <img src="https://media.licdn.com/dms/image/D5603AQH1uHh5IA7rSg/profile-displayphoto-shrink_800_800/0/1690358917251?e=2147483647&v=beta&t=Rqh0vvyEKaLyT2JwEy9fAWIcNdd479t5fuKKUNNl26I" alt="Bradlee Harrison" />
            <div>
                <h2>Bradlee Harrison</h2>
                <p>Web Developer and Content Creator</p>
            </div>
            </div>
        <div className="content-grid">
            <div className="latest-posts">
                <h2>Latest Blog Posts</h2>
                <div className="post-card">
                    <h3><a href="#post1">Understanding The Chu Limit</a></h3>
                    <p>Summary of the post...</p>
                </div>
                <div className="post-card">
                    <h3><a href="#post2">Web Development Trends in 2023</a></h3>
                    <p>Summary of the post...</p>
                </div>
                <div className="post-card">
                    <h3><a href="#post3">Introduction to WebAssembly</a></h3>
                    <p>Summary of the post...</p>
                </div>
            </div>

            <div className="skills-section">
            <h2>My Skills</h2>
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
            <a href="https://github.com/bradleeharr"><i className="icon-github"></i> GitHub</a>
            <a href="https://linkedin.com/in/bradlee-harrison"><i className="icon-linkedin"></i> LinkedIn</a>
        </div>
</footer>

    </div>


 
  );
};

export default Intro;
