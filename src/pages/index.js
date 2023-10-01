import React from 'react';
import "./styles/index.css";

// Import other assets
// import logo from '../assets/logo.png';

const Index = () => {
  return (
    <React.Fragment>
      <head>
        <title>Bradlee Harrison Home</title>
      </head>

      <body>
  <header class="main-header clearfix" role="header">
    <div class="logo">
      <a onclick="document.getElementById('top').scrollIntoView({behavior: 'smooth'})"><em>./</em> </a>
    </div>
    <nav id="menu" class="main-nav" role="navigation">
      <ul class="main-menu">
        <li><a href="#section1">Home</a></li>
        <li><a href="#section3">About Me</a></li>
        <li><a href="#section6">Contact</a></li>
        <li><a onclick="window.open('assets/resume.pdf');">Resume</a></li>
      </ul>
    </nav>
  </header>

  {/* Main Banner Area */}

<script src="assets/js/vortex.js">SCRIPT HERE</script>

  <section class="section main-banner" id="top" data-section="section1">
        <div id="bg-video"></div>
        <div id="title"></div>
        <div class="video-overlay header-text">
            <div class="caption">
                <h6>Electrical and Computer Engineering</h6>
                <h2><em>Bradlee</em> Harrison</h2>
                <div class="main-button">
                    <div class="scroll-to-section"><a href="/blogindex">See more</a></div>
                </div>
            </div>
        </div>
  </section>
</body>
</React.Fragment>
);
};

export default Index;