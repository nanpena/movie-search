import React from 'react'
import Axios from 'axios'

export default function Popup ({selected}) {
    console.log('popup function', selected)

    const voteThumbsUp = async (movie) => {
        const title = movie.Title
    
        console.log('I like this movie', title)
        const {data} = await Axios.post('./api/movies',{title : title, thumbsUp : true})
        console.log('dataaaaaa', data)

    }

    const voteThumbsDown = async (movie) => {
        console.log('This movie sucks', movie.Title)
        const title = movie.Title
        const {data} = await Axios.post('./api/movies',{title : title, ThumbsDown: true})
        console.log('dataaaaaa', data)

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