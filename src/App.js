// App.js
import React, { useRef } from 'react';
import Header from './Components/Header';
import './App.css';
import cv from './images/cv.pdf';


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Header
        scrollToHome={() => scrollToRef(homeRef)}
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToSkills={() => scrollToRef(skillsRef)}
        scrollToExperience={() => scrollToRef(experienceRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <div style={{ marginLeft: '350px', padding: '20px' }}>
        <div className='outer-div'>
          <div id="home" className="container">
            <div className="overlay"></div>
            <div className="text">FASNA F F<br></br>
              <p>I'm Developer, Designer</p>
            </div>
          </div>
        </div>
        <div ref={aboutRef} id='about'>
          <h1>ABOUT</h1>
          <p>WHO AM I?</p>
          <p>Hello! I'm Fasna F F, an enthusiastic and aspiring full stack developer eager to embark on a career in software development. Although I'm a fresher, I'm equipped with a solid foundation in key technologies such as JavaScript, React, Node.js, MongoDB, Express, HTML, CSS, Python, and C, which I've honed through coursework, personal projects, and self-study. I have a passion for learning and a drive to contribute to impactful projects that push the boundaries of innovation. I'm excited to apply my skills and knowledge to real-world challenges and to grow professionally in the dynamic field of web development.</p>
        </div>
        <div ref={skillsRef} id='skills'>
          <h1>SKILLS</h1>
          <div className="skills">
            <div className="skill">
              <p>HTML <span>90%</span></p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>CSS <span>90%</span></p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>JAVASCRIPT<span>70%</span></p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>REACT <span>60%</span></p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>NODE.JS <span>70%</span></p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>EXPRESS.JS <span>60%</span></p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>MONGODB <span>70%</span></p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>JAVA <span>50%</span></p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>PYTHON <span>70%</span></p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div ref={experienceRef} id='experience'>
          <h1>PROJECTS</h1>
          <div className='experience'>
            <div>
              <h3>1.TODO Application (MERN Stack):</h3>
              <p>Developed a TODO application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                Implemented features such as user authentication, task management, and data persistence.
                Gained hands-on experience in full-stack web development, including front-end design and backend server setup.</p>
            </div>
            <div>
              <h3>2.SCHOOL LIBRARY MANAGEMENT SYSTEM (MERN STACK - GROUP PROJECT):</h3>
              <p>Collaborated on a group project to build a school library management system using the MERN stack. Designed and implemented database schemas, user interfaces, and API endpoints. Demonstrated strong teamwork, communication, and problem-solving skills throughout the project lifecycle.</p>
            </div>
            <div>
              <h3>3.E-COMMERCE APPLICATION (NODE.JS, EXPRESS.JS, MONGODB, HBS):</h3>
              <p>Created a dynamic e-commerce platform using Node.js, Express.js, MongoDB, and Handlebars (HBS) templating engine. Developed features such as product catalog, user authentication, shopping cart functionality, and order processing. Gained valuable experience in server-side programming, database management, and web application deployment.</p>
            </div>
          </div>
        </div>
        <div ref={contactRef} id='contact'>
          <h1>Contact Section</h1>
          <p>Git Hub : <a href="https://github.com/Iamfasna">https://github.com/Iamfasna</a></p>
          <p>Linkedin: <a href="https://linkedin.com/in/fasna-f-f-79984b2ab">https://linkedin.com/in/fasna-f-f-79984b2ab</a></p>
          <p>Email: <a href="mailto:fasnaff2@gmail.com">fasnaff2@gmail.com</a></p>
          <p>Contact no : <a href="tel:+919188707358">91 9188707358</a></p>
          <p>Resume:<a href={cv} download>Download pdf</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
