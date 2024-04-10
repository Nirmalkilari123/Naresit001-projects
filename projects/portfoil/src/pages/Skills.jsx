import React from 'react'
import '../App.css'
function Skills() {
  return (
    <div className='Skills'>
        <h1 style={{fontFamily:'Roboto', fontSize:'40px', fontWeight:'bold' ,color:'red'}}>Skills</h1>
        <ul>
          <div style={{display:'flex', padding:'20px'}} >
          <a href="https://html.com/" target="_blank">
          <li className='listItem'>
            <div>
              <img src='https://assets.ccbp.in/frontend/react-js/tech-era/html-logo-img.png' className='html'/>
            </div>
            <p className='LinkItems'>HTML</p>
          </li>
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
          <li className='listItem'>
            <div>
              <img src='https://assets.ccbp.in/frontend/react-js/tech-era/css-logo-img.png' className='html'/>
            </div>
            <p className='LinkItems'>CSS</p>
          </li>
          </a>
          <a href="https://www.learn-js.org/" target="_blank">
          <li className='listItem'>
            <div>
              <img src='https://assets.ccbp.in/frontend/react-js/tech-era/javascript-logo-img.png' className='html'/>
            </div>
            <p className='LinkItems'>JavaScript</p>
          </li>
          </a>
          <a href="https://en.wikipedia.org/wiki/FLEXBOX" target="_blank">
          <li className='listItem'>
            <div>
              <img src='https://assets.ccbp.in/frontend/react-js/tech-era/flexbox-logo-img.png' className='html'/>
            </div>
            <p className='LinkItems'>FlexBox</p>
          </li>
          </a>
          <a href="https://legacy.reactjs.org/" target="_blank">
          <li className='listItem'>
            <div>
              <img src='https://assets.ccbp.in/frontend/react-js/tech-era/react-logo-img.png' className='html'/>
            </div>
            <p className='LinkItems'>ReactJs</p>
          </li>
          </a>
          <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" target="_blank">
          <li className='listItem'>
            <div>
              <img src='https://assets.ccbp.in/frontend/react-js/tech-era/node.js-logo-img.png' className='html'/>
            </div>
            <p className='LinkItems'>NodeJs</p>
          </li>
          </a>
          </div>
        </ul>
    </div>
  )
}

export default Skills