import React, { useEffect } from 'react';
import './styles/blogindex.css'
import 'font-awesome/css/font-awesome.min.css';
import profileImg from '../images/profile.jpg';
import { navigate } from 'gatsby'; // Import navigate

const Intro = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (



<div> 
<section className="intro">
    <button onClick={() => navigate(-1)} className="back-button absolute">← Back</button> 
    <div className="hero">
          <div className="continer centerIt">
          <h1>Hello, I'm Bradlee Harrison. This is my site. </h1>  
          {/* <img src={profileImg} alt="Bradlee Harrison" /> */}
              <p class="scroll-to-section">I study electrical and computer engineering. I have interests in
               Signal Processing of Radar/Communications, Information Theory, Embedded Systems, and Machine Learning.
               I am pursuing a master's in Electrical and Computer Engineering at the University of Oklahoma's Advanced
                Radar Research Center, planning to graduate in 2024. </p>
        </div>
    </div>
</section>

        

        <div className="content-grid">
            <div className="skills-contact-section">
                <div className="skills-section">
                    <h2>My Skills and Tools</h2>
                    {/*Click for a list of projects with respect to each skill! */}
                    <ul>

                        <li>Python</li>
                        <li>C/C++</li>
                        <li>Pytorch</li>
                        <li>Software Defined Radio</li>
                        <li>C#/.NET</li>
                        <li>Java</li>
                        <li>MATLAB</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>TensorFlow</li>
                        <li>FPGAs</li>
                        <li>Microcontrollers</li>
                        <li>Verilog</li>
                        <li>GNU Radio</li>
                        <li>Gatsby</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                    <a href="/fluid">Fluid Sim</a>
                </div>

        <section className="contact">
            <div className="contact-section">
                <h2>Contact Me</h2>
                <div className="navigation">
                    <div className="social-links centerIt">
                            <a href="https://github.com/bradleeharr"><i className="fa fa-github"></i>  GitHub</a>
                            <a href="https://linkedin.com/in/bradlee-harrison"><i className="fa fa-linkedin"></i> LinkedIn</a>
                        </div>
                </div>
                <form action="https://formspree.io/f/mqkvkjgj" method="post">
                    <input input name="name" type="text" class="form-control" id="name" placeholder="Your Name" />
                    <input input name="email" type="email" class="form-control" placeholder="Your Email" />
                    <input input name="message" type="text" class="form-control" placeholder="Your Message"/>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
            </div>
            
            <div className="latest-posts">
                <a href="/blog/">
                <h2>Short Notes</h2>
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
                <a href="/blog/fpga-resources/#"><div className="post-card">
                    <h3>FPGA Resources</h3>
                    <p> December 12, 2022 </p>
                    <p>A list of FPGA Resources for learning and practicing Verilog, VHDL, and understanding digital FPGA synthesis...</p>
                </div> 
        </a>
        </a>
        
            </div>

           
        </div>
</div>
 
  );
};

export default Intro;
