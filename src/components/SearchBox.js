import React, {useState} from 'react'

function SearchBox() {
    
    const [title, setTitle] = useState('')
    const [movies, setMovies] = useState([])
    
    const searchMovie =  async(event) => {
        event.preventDefault();

        console.log(`title is ${title}`)


       const url = `https://api.themoviedb.org/3/search/movie?api_key=c7fb2bfe8aa168f9562481b40e40c26a&language=en-US&query=${title}&include_adult=false`

       try{
           const res = await fetch(url)
           const data = await res.json();
           setMovies(data.results)
           

       }catch(err){
           console.error(err)
       }

    }

    return (
        <>
        <form className='form' onSubmit={searchMovie}>
            <input className='input' type='text' placeholder='type a movie title...'
                   value={title} onChange={(event)=> setTitle(event.target.value)}
            />
            <button className='button' type='submit'> Search</button>
        </form>
        <div className='movies-list'> 
       {movies.map(movie =>
          <div className='movie-card' key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />  
          <p>{movie.overview}</p>
          <button> View </button>
         </div>
       )}
        
        </div>
        </>

        
    )
}

export default SearchBox