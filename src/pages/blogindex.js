import React, { useEffect } from 'react';
import './styles/blogindex.css'
import 'font-awesome/css/font-awesome.min.css';

const Intro = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (

    <div className="intro"> 



<section className="profile-card">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="continer centerIt">
          <h4><em>Hello, </em> I'm Bradlee Harrison</h4>  
          <img src="https://media.licdn.com/dms/image/D5603AQH1uHh5IA7rSg/profile-displayphoto-shrink_800_800/0/1690358917251?e=2147483647&v=beta&t=Rqh0vvyEKaLyT2JwEy9fAWIcNdd479t5fuKKUNNl26I" alt="Bradlee Harrison"/>
 
              <p class="scroll-to-section">I am an electrical and computer engineer. I have interests in
               Signal Processing of Radar/Communications, Information Theory, Embedded Systems, and Machine Learning.
               I received my Bachelor's Degree in Electrical Engineering at the University of Oklahoma in December 2022. 
               I am pursuing a master's in Electrical and Computer Engineering at the University of Oklahoma's Advanced Radar Research Center planned May 2024.
               I'm always looking to learn more. Please don't hesitate to <a href="#section6"> contact me. </a> or                     <a href="./blog/"> Check out some of my posts. </a>
</p>
          </div>
        </div> 
      </div>
    </div>
</section>

        <div className="navigation">
            {/*<a href="#blog">Blog</a>
            <a href="#projects">Projects</a> 
            <button onClick={toggleTheme}> Toggle Dark Mode </button> */}
        </div>

        <div className="content-grid">
            <div className="latest-posts">
                <a href="/blog/"><h2>Latest Blog Posts</h2>
                <a href="/blog/my-first-blog-post/#">
                    <div className="post-card">
                        <h3>Gatsby and Katex</h3>
                        <p> August 25, 2023 </p>
                        <p>Using Markdown to create posts with LaTeX format supported...</p>
                    </div>
                </a>
                <a href="/blog/ann-chess/#">
                <div className="post-card">
                    <h3>Artificial Neural Networks for Chess</h3>
                    <p> December 25, 2022 </p>
                    <p>Analysis and implementation of an AI for chess trained on supervised learning from human game data...</p>
                </div>
                </a>
                <a href="/blog/test-post/#"><div className="post-card">
                    <h3>IR Kalman Filter Tracking</h3>
                    <p> December 12, 2022 </p>
                    <p>Using Kalman Filer and YOLOv8 to perform state-of-the-art object tracking...</p>
                </div>
                </a>
                </a>
            </div>

            <div className="skills-section">
            <h2>My Skills</h2>
            Click for a list of projects with respect to each skill!
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
