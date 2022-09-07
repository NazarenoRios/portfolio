import React from 'react'
import './about.css'
import ME from '../../assets/me/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Looking for it</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Work</h5>
              <small>Very Good Teamwork</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>

          <p>
            I'm going to tell you a little about myself <br/> <br/>
            I'm a Fullstack Developer, who loves everything related to programming. <br/>
            Literally i can be spending time the whole day programming (hours and hours) , and i dont notice <br/><br/>
            I'm passionate about creating solutions to all kinds of problems in the world of programming.<br/><br/>
            I like to learn new things all the time<br/><br/>
            I'm currently taking my first steps in this world, but i consider myself a person who is very capable of performing very <br/>
            well anywhere.<br/><br/>
            
            I'm a very responsible person and good at teamwork<br/><br/> 
            This is the kind of person I am. I never leave anything half done, I always say, "if something has to be done, it has to be done well"
          </p>

          <a id='btnAbout' href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About