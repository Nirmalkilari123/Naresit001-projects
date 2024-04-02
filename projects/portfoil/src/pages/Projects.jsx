import React, { useState } from 'react';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const projectsData = [
    {
      category: 'Static',
      projects: [
        { title: 'Music Page', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/music-page-img.png' },
        { title: 'Tourism Website', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/tourism-website-img.png' },
        { title: 'Happy Meal', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/happy-meal-img.png' },
        { title: 'Book Store', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/book-store-img.png' },
      ],
    },
    {
      category: 'Dynamic',
      projects: [
        { title: 'VR Website', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/vr-website-img.png' },
        { title: 'Food Munch', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/food-munch-img.png' },
        { title: 'Color Palette', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/color-palette-img.png' },
        { title: 'Weather Report', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/weather-report-img.png' },
      ],
    },
    {
      category: 'React',
      projects: [
        { title: 'VR Website', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/vr-website-img.png' },
        { title: 'Food Munch', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/food-munch-img.png' },
        { title: 'Color Palette', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/color-palette-img.png' },
        { title: 'Weather Report', imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/weather-report-img.png' },
      ],
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData.flatMap(category => category.projects)
    : projectsData.find(category => category.category === selectedCategory)?.projects || [];

  return (
    <div className='Projects'>
      <nav className='nav'>
        <img src='https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png' className='img1' alt='Website Logo'/>
      </nav>
      <select className='sel' onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Static">Static Website</option>
        <option value="Dynamic">Dynamic Website</option>
        <option value="React">React Website</option>
      </select>
      <div className='q-con'>
        <h1 className='pro-head'>{selectedCategory} Projects</h1> 
        <ul className='app-con'>
          {filteredProjects.map((project, index) => (
            <li key={index} className='app-li'> 
              <img src={project.imageUrl} className='pic' alt={project.title}/> 
              <p style={{textAlign:'center'}}>{project.title}</p> 
            </li>
          ))}
        </ul> 
      </div>
    </div>
  )
}

export default Projects;
