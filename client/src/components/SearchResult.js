import React from 'react'

export default function SearchResult () {
    return (
        <div className='movie-list'> 
        {movies.filter(movie => movie.Poster).map(movie =>
            
           <div className='movie-card' key={movie.imdbID} onClick={()=> displayMovie(movie)}>
          
           <img className='movie-img'src={movie.Poster} 
                 alt={`${movie.Title}poster`}/>  
           <h2 className='movie-title'>{movie.Title}</h2>
 
           <div className='movie-content'>
           {(selected.Title === movie.Title ) ? <Popup selected={selected}/> : false}
           </div>
 
          </div>
    
        )}
         
         </div>
        
        )
}

