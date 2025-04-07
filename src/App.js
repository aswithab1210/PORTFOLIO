import React from "react";
import { Element } from "react-scroll";
import Navbar from "./navbar";
import TypingEffect from "./TypingEffect";

const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Element name="home" className="section ">
        <div>
          <div class="container vh-100 d-flex align-items-center justify-content-center">
              <div class="row align-items-center">
                  <div class="text-white col-md-6 text-center text-md-start">
                      <h2>Hello, It's Me</h2>
                      <h1>SAI ASWITHA BATTULA</h1>
                      <h3>And I'm a <TypingEffect/> </h3>
                      <p>Computer Science graduate with a Java Full Stack Development certification, aiming to grow professionally while exploring business management to drive innovative, data-driven solutions.</p>
                      <a href="/SAI_ASWITHA_RESUME.pdf" download class="btn btn-info text-black mt-3 text-white">Download My Resume</a>
                  </div>
              </div>
          </div>
        </div>
      </Element>

      <Element name="about me" className="p-5 bg-white">
        <section class="container my-5" id="about">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2 class="text-info">About Me</h2>
                <p>
                  I'm <strong>Sai Aswitha Battula</strong>, a passionate and hardworking fresher with a Bachelor's degree in Computer Science and Engineering. I hold certifications in Java Full Stack Development and Web Development from Tech Mahindra SMART Academy and SmartKnower, respectively.
                </p>
                <p>
                  Skilled in HTML, CSS, JavaScript, Bootstrap, React.js, and Java, I enjoy building user-friendly interfaces and exploring new technologies. My strengths include leadership, communication, and teamwork—qualities essential not just in tech, but in business as well.
                </p>
                <p>
                   I’ve worked on projects like <em>Stroke Risk Prediction using Machine Learning</em> and <em>Smartphone App Usage Analysis</em>, and have completed internships in both web development and machine learning—giving me a foundation in both data-driven development and user-centric design.
                </p>
                <p>
                 As I transition into business management through an MBA, I aim to combine my technical background with strategic thinking to create innovative, data-driven solutions. This journey reflects my passion for continuous learning and real-world problem-solving.
                </p>
                <p>
                 Outside of academics, I enjoy listening to music and reading books. I'm excited to kick-start a career that blends technology, creativity, and business insight.
                </p>
    
            </div>
            <div class="col-md-6 text-center">
              <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="Sai Aswitha" class="img-fluid rounded shadow" width="300"></img>
            </div>
          </div>
        </section>

      </Element>

      

      <Element name="skills" className="bg-white p-5">
        <section class="container my-5 skills-section">
          <h2 class="text-info">My Skill Set</h2>
          <div class="row g-4">
            <div class="col-md-6 col-lg-4">
              <div class="skill-card">
                <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" class="skill-img" alt="HTML"></img>
                <h5 >HTML</h5>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="skill-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" class="skill-img" alt="CSS"></img>
                <h5>CSS</h5>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="skill-card">
                <img src="https://www.dropbox.com/s/2uvkvgwqg6m6bwp/javascript.png?raw=1" class="skill-img" alt="JavaScript"></img>
                <h5>JavaScript</h5>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="skill-card">
                <img src="https://www.dropbox.com/s/3kinvupgu341kfh/react.png?raw=1" class="skill-img" alt="Java"></img>
                <h5>ReactJs</h5>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="skill-card">
                <img src="https://img.icons8.com/?size=512&id=9nLaR5KFGjN0&format=png" class="skill-img" alt="MySQL"></img>
                <h5>MySQL</h5>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="skill-card">
                <img src="https://www.dropbox.com/s/ztynnrd60tycwgi/git.png?raw=1" class="skill-img" alt="Bootstrap"></img>
                <h5>Git</h5>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="skill-card">
                <img src="https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png" class="skill-img" alt="Java"></img>
                <h5>Java</h5>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="skill-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" class="skill-img" alt="MySQL"></img>
                <h5>Visual Studio Code</h5>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="skill-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" class="skill-img" alt="MySQL"></img>
                <h5>Bootstrap</h5>
              </div>
            </div>
          </div>
        </section>
      </Element>


      {/* this is projects section */}
      <Element name="projects" className="bg-white p-5">
        <section id="projects" class="container my-5 skills-section">
          <h2 class="text-info">My Projects</h2>
          <div class="row g-4">
            
            {/* <!-- Project 1 --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 shadow-sm border-0">
                <img src="/project_1.png" class="card-img-top" alt="Project 1"></img>
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-info">Portfolio Website</h5>
                  <p class="card-text flex-grow-1">A responsive personal portfolio website built using HTML, CSS, Bootstrap, JavaScript, and ReactJs.</p>
                  <a href="/" class="btn btn-outline-info mt-auto">View Project</a>
                </div>
              </div>
            </div>
        
            {/* <!-- Project 2 --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 shadow-sm border-0">
                <img src="/project_2.png" class="card-img-top" alt="Project 1"></img>
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-info">Business Website</h5>
                  <p class="card-text flex-grow-1">A Business website built using HTML, CSS, Bootstrap, and JavaScript.</p>
                  <a href="https://sls-developers.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-outline-info mt-auto">View Project</a>
                </div>
              </div>
            </div>
        
            {/* <!-- Project 3 --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 shadow-sm border-0">
                <img src="/project_3.png" class="card-img-top" alt="Project 1"></img>
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-info">Calculator</h5>
                  <p class="card-text flex-grow-1">A Calculator built using HTML, CSS, Bootstrap, and JavaScript.</p>
                  <a href="https://my-calculator1210.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-outline-info mt-auto">View Project</a>
                </div>
              </div>
            </div>
            {/* <!-- Project 4 --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 shadow-sm border-0">
                <img src="/project_4.png" class="card-img-top" alt="Project 1"></img>
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-info">Sip Calculator</h5>
                  <p class="card-text flex-grow-1">The Sip Calculator is built using HTML, CSS, Bootstrap, and JavaScript.</p>
                  <a href="https://sip-calculator1210.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-outline-info mt-auto">View Project</a>
                </div>
              </div>
            </div>
        
            {/* <!-- Project 5 --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 shadow-sm border-0">
                <img src="/project_5.png" class="card-img-top" alt="Project 1"></img>
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-info">TO-DO-LIST APP</h5>
                  <p class="card-text flex-grow-1">A responsive personal portfolio website built using HTML, CSS, Bootstrap, and JavaScript.</p>
                  <a href="https://to-do-list1210.netlify.app/" target="_blank" rel="noreferrer" class="btn btn-outline-info mt-auto">View Project</a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </Element>

      <Element name="contact me" className="bg-white p-5">
      <section id="contact" className="py-5">
  <div className="container">
    <h2 className="text-center text-info fw-bold mb-5">Let's Connect</h2>
    <div className="row g-5 align-items-stretch">
      
      {/* Contact Form */}
      <div className="col-md-6">
        <div className="p-4 bg-white shadow rounded h-100" style={{ backgroundColor: "#f8f9fa" }}>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Write your message..." required></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-info text-white fw-semibold py-2">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Info + Social Media */}
      <div className="col-md-6">
        <div className="p-4 bg-white shadow rounded h-100 d-flex flex-column justify-content-center align-items-center text-center" style={{ backgroundColor: "#f8f9fa" }}>
          <h4 className="fw-bold mb-3">Contact Information</h4>
          <ul className="list-unstyled text-muted">
            <li className="mb-3">
              <i className="fas fa-envelope text-info me-2"></i> aswithakousi@gmail.com
            </li>
            <li className="mb-3">
              <i className="fas fa-phone text-info me-2"></i> +91 97050 54848
            </li>
            <li className="mb-3">
              <i className="fas fa-map-marker-alt text-info me-2"></i> Hyderabad, Telangana - 500062
            </li>
          </ul>

          <h5 className="fw-semibold mt-4">Find me on</h5>
          <div className="d-flex gap-3 fs-4 mt-2">
            <a href="https://linkedin.com/in/sai-aswitha-battula" target="_blank" rel="noopener noreferrer" className="text-info">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/aswithab1210" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-primary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:aswithakousi@gmail.com" target="_blank" rel="noopener noreferrer" className="text-danger">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      </Element>
      <Element className="bg-white">
      <footer class="bg-dark text-light py-4 mt-5 shadow-lg rounded-top">
        <div class="container text-center">
          <p class="mb-0 fw-light">
            &copy; 2025 <span class="fw-semibold text-white">SAI ASWITHA BATTULA</span>. All rights reserved.
          </p>
        </div>
      </footer>
      </Element>
    </div>
  );
};

export default App;
