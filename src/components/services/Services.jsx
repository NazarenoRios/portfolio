import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
            <div className="service__head">
              <h3>Frontend Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Experience and good control of HTML and CSS</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Good control of the Bootstrap framework</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>React management experience</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Good handling of the utilities offered by Redux</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lot of experience mastering JavaScript</p>
              </li>
            </ul>
        </article>
        {/* END OF FRONT-END DEVELOPMENT */}
        <article className="service">
            <div className="service__head">
              <h3>Backend Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Experience and good control of Node.js</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Good handling of the Express framework</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Good control in database management system (mySql)</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Good handling of PostgreSQL</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Good practice and handling of Sequelize</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Currently i know some of python, but i'm still learning</p>
              </li>
            </ul>
        </article>
        {/* END OF BACK-END DEVELOPMENT */}
        <article id='service3' className="service">
            <div className="service__head">
              <h3>Responsibility / Commitment</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>One of my greatest virtues is my responsibility, always works first</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>I am someone dedicated who loves to continue learning</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>I always give my best, during the work time, always try<br /> 
                to achieve the goal of the day and more</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>I like to do personal projects, as long as it doesn't interfere with work</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>I am very good at teamwork, I never had any problem with <br /> 
                anyone in my life, I always try to find a solution in which everyone is satisfied</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>English has always been an everyday thing in my life, like everything <br />
                 i do, i do it in English, currently I have a good level</p>
              </li>
            </ul>
        </article>
        {/* END OF CONTECT CREATION */}
      </div>
    </section>
  )
}

export default Services