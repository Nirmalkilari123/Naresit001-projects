import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Countdown Timer</h1>
        <div >
          <button className='btn'>5</button>
          <button className='btn1'>10</button>
          <button className='btn2'>15</button>
        </div>
        
      </div>
    )
  }
}
