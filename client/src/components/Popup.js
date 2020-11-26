import React from 'react'
import Axios from 'axios'

export default function Popup ({selected}) {
    console.log('popup function', selected)

    const voteThumbsUp = async (movie) => {
        const title = movie.Title
        const movieId = movie.imdbID

        

        console.log('I like this movie', title, movieId)
        // const res = await fetch('/api/allMovies')
        //  const data = await res.json();
        // console.log('tessssss', data)

        const {data} = await Axios.post('./api/movies',{title : title, thumbsUp : true})
        console.log('dataaaaaa', data,"selected:",selected)
        


    }

    const voteThumbsDown = async (movie) => {
        console.log('This movie sucks', movie.Title)
        const title = movie.Title
        const {data} = await Axios.post('./api/movies',{title : title, ThumbsDown: true})

    }


   
    return (
        <section>
            <div> 
            <p>{selected.Plot}</p>
            <h4>Director : {selected.Director}</h4>
            <h3>{selected.vote_average}</h3>
           
            <button movie={selected} onClick={()=> voteThumbsUp(selected)}> Thumbs Up</button>
            <button movie={selected} onClick={()=> voteThumbsDown(selected)}> Thumbs Down</button>
            </div>
        </section>
    )
}