import React, {useState} from 'react'
import Popup from './Popup'



function SearchBar({openPopup}) {
    
    const [title, setTitle] = useState('')
    const [movies, setMovies] = useState([])
    const [selected, setSelected] = useState({})
   
    
    const searchMovie =  async(event) => {
        event.preventDefault();   

        if (title === ''){
            event.preventDefault();   
            alert('Your search is empty, please enter a movie title')

        } else {

            const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${title}&page=1&r=json`  
   
            try{
       
                const res = await fetch(url, {
                                   "method": "GET",
                                   "headers": {
                                     "x-rapidapi-key": "dcc87032famshc1b79ddcc901dc4p140abfjsn05b22a78edfd",
                                     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"

                 }})
                const data = await res.json();
                setMovies(data.Search)  
            }catch(err){
                 console.error(err)
             }

        }
        
    }

    const displayMovie = async (movie) => {

        const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${movie.imdbID}&r=json` 

        try{
     
           const res = await fetch(url, {
                                   "method": "GET",
                                   "headers": {
                                     "x-rapidapi-key": "dcc87032famshc1b79ddcc901dc4p140abfjsn05b22a78edfd",
                                     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"

           }})
           const data = await res.json();
           setSelected(data)
           
       }catch(err){
           console.error(err)
       }
    }


    
    
    return (
        
        <>
        <form className='form' onSubmit={searchMovie}>
            <label className='label'> </label>
            <input className='input' type='text' placeholder='Enter a movie title (i.e. Harry Potter)'
                   value={title} onChange={(event)=> setTitle(event.target.value)}
            />
            <button className='button' type='submit'> Search</button>
        </form>
    
    
              {/* /////////// Search result display here :  ////////// */}

        {(movies === undefined) ? 
            <div className='sorry'>
                <h1> <span className='error-icon'><i class="fas fa-times"></i></span>
                Sorry, the movie you're searching is unavailable</h1> 
            </div> 

        : 

            <div className='movie-list'> 
                {movies.map(movie =>
                    <div className='movie-card' key={movie.imdbID} onClick={()=> displayMovie(movie)}>
                      {(movie.Poster === 'N/A') ? <img className='movie-img'src='https://i.ibb.co/xsV9CFY/poster-unavailable.png' alt='poster-unavailable'/>
                      : <img className='movie-img'src={movie.Poster} alt={`${movie.Title}poster`}/>}
        
                 
                      <h2 className='movie-title'>{movie.Title}</h2>

                     <div className='movie-content'>
                     {(selected.Title === movie.Title ) ? <Popup selected={selected}/> : false}
                     </div>

                     </div>
   
                )}
            </div>}

        </>)
}

export default SearchBar