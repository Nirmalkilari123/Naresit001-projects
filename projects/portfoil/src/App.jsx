import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
		<div>
			<Header />
			<Routes>
				<Route
					path='/'
					Component={Home}
				/>
				<Route
					path='/about'
					Component={About}
				/>
				<Route
					path='/Projects'
					Component={Projects}
				/>
				<Route
					path='/Contact'
					Component={Contact}
				/>
				<Route  path='/Skills'Component={Skills} />
				<Route path='/Login' Component={Login}/>
			</Routes>
			
		</div>
	)
}

export default App