import React from 'react'
import './Movie.css'
const Movies = ({ moviesList }) =>
{
   
  return (
		<div>
			{moviesList &&
				moviesList.map((movie) => (
					<div className='grid'>
						<img src={movie.Poster} alt={movie.Title}/>
						<div className='grid'>
					    <h3 className='head'>{movie.Title}</h3>
						<p className='para'>Released: {movie.Year}</p>
						</div>
					</div>
				))}
		</div>
	)
}

export default Movies