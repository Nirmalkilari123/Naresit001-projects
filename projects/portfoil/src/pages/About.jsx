import React from 'react'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <div className='About'>
    <section id='about'>
      
     
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src='https://res.cloudinary.com/de4euasql/image/upload/v1698392843/WhatsApp_Image_2023-10-27_at_13.15.56_ab6554fe_nabsny.jpg'alt="Me" className='img2' />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>B.TECH</h5>
                  <small>Mechanical Engineering<br /><i>University of JNTUA,Ananthapuramu.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>7.34</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                    <li style={{color:'blue'}}>Fullstack Developer</li>
                      <li style={{color:'blue'}}>Frontend Developer</li>
                      <li style={{color:'blue'}}>Backend Developer</li>
                      <li style={{color:'blue'}}>SQL Developer</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Mechanical Engineering Undergradute</b> at the University of JNTUA. 
                    I'm an enthusiastic and driven Software Engineering role seeking a challenging internship opportunity to apply 
                    and expand my technical skills. 
                    With a strong academic foundation in software role  and hands-on experience in various programming languages,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                    
            </p>

          </div>
      </div>
      
    </section>
    </div>

  )
}

export default About