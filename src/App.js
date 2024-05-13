// App.js
import React, { useRef } from 'react';
import Header from './Components/Header';
import './App.css';
import jsimage from './images/images.png'
import Reactimg from './images/react.png'
import Nodeimg from './images/nodejs.jpg'
import expressimg from './images/express.png'
import mongodbimg from './images/mongodb.png'
import python from './images/python.png';
import java from './images/java.png'
import html from './images/html.png'
import css from './images/css.png'
import github from './images/github.png'
import cv from './images/cv.pdf'
import frontend from './images/frontend.jpg'
import backend from './images/backend.jpeg'
import webdesign from './images/webdes.png'



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
    <div style={{ display: 'flex' }} >
      <Header
        scrollToHome={() => scrollToRef(homeRef)}
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToSkills={() => scrollToRef(skillsRef)}
        scrollToExperience={() => scrollToRef(experienceRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <div style={{ marginLeft: '350px', padding: '20px', backgroundcolor: '#000000' }}>
        <div className='outer-div' >
          <div className='resume'>
            <p>I'm a FullStack Developer</p>
            <div className='services'>
              <div><img src={frontend} alt='img'></img></div>
              <div><img src={backend} alt='img'></img></div>
              <div><img src={webdesign} alt='img'></img></div>
            </div>
          </div>
          <div id="home" class="container">
            <div className="overlay"></div>
            <div className="text">Hello..!<br></br>I'm Fasna</div>
          </div>
        </div>
        <div ref={aboutRef} id='about'>
          {/* About content */}
          <h1>ABOUT</h1>
          <p>WHO AM I?</p>
          <p>Hello! I'm Fasna F F, an enthusiastic and aspiring full stack developer eager to embark on a career in software development. Although I'm a fresher, I'm equipped with a solid foundation in key technologies such as JavaScript, React, Node.js, MongoDB, Express, HTML, CSS, Python, and C, which I've honed through coursework, personal projects, and self-study. I have a passion for learning and a drive to contribute to impactful projects that push the boundaries of innovation. I'm excited to apply my skills and knowledge to real-world challenges and to grow professionally in the dynamic field of web development.</p>
        </div>
        <div ref={skillsRef} id='skills'>
          {/* Skills content */}
          <h1>SKILLS</h1>
          <div className='skills-div'>
            <div className='box'>
              <img src={jsimage} alt='js'></img>
            </div>
            <div className='box'>
              <img src={Reactimg} alt='react'></img>
            </div>
            <div className='box'>
              <img src={Nodeimg} alt='node'></img>
            </div>
            <div className='box'>
              <img src={expressimg} alt='express'></img>
            </div>
            <div className='box'>
              <img src={mongodbimg} alt='mongo'></img>
            </div>
            <div className='box'>
              <img src={github} alt='github'></img>
            </div>
            <div className='box'>
              <img src={python} alt='python'></img>
            </div>
            <div className='box'>
              <img src={java} alt='java'></img>
            </div>
            <div className='box'>
              <img src={html} alt='html'></img>
            </div>
            <div className='box'>
              <img src={css} alt='css'></img>
            </div>
          </div>
        </div>
        <div ref={experienceRef} id='experience'>
          <h1>PROJECTS</h1>
          <p> 1.TODO Application (MERN Stack):</p>
          <p>  Developed a TODO application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
            Implemented features such as user authentication, task management, and data persistence.
            Gained hands-on experience in full-stack web development, including front-end design and backend server setup.</p>
          <p>  2.SCHOOL LIBRARY MANAGEMENT SYSTEM (MERN STACK - GROUP PROJECT):</p>
          <p>
            Collaborated on a group project to build a school library management system using the MERN stack. designed and implemented database schemas, user interfaces, and API endpoints. demonstrated strong teamwork, communication, and problem-solving skills throughout the project lifecycle.</p>
          <p> 3.E-COMMERCE APPLICATION (NODE.JS, EXPRESS.JS, MONGODB, HBS):</p>
          <p>
            Created a dynamic e-commerce platform using Node.js, Express.js, MongoDB, and Handlebars (HBS) templating engine. developed features such as product catalog, user authentication, shopping cart functionality, and order processing. gained valuable experience in server-side programming, database management, and web application deployment.
          </p>
        </div>
        <div ref={contactRef} id='contact'>
          {/* Contact content */}
          <h1>Contact Section</h1>
          <p>Git Hub : <a href="https://github.com/Iamfasna">https://github.com/Iamfasna</a></p>
          <p>Linkedin: <a href="https://linkedin.com/in/fasna-f-f-79984b2ab">https://linkedin.com/in/fasna-f-f-79984b2ab</a></p>
          <p>Email: <a href="mailto:fasnaff2@gmail.com">fasnaff2@gmail.com</a></p>
          <p>Contact no : <a href="tel:+919188707358">91 9188707358</a></p>
          <p>Resume:<a href='src/images/cv.pdf' download={cv}>Download pdf</a></p>
        </div>

      </div >
    </ div >
  );
}

export default App;
