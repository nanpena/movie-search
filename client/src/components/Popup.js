import React from 'react'
import Axios from 'axios'

export default function Popup ({selected}) {

    const voteThumbsUp = async (movie) => {
        const title = movie.Title
        const {data} = await Axios.post('./api/movies',{title : title, thumbsUp : true})

    }

    const voteThumbsDown = async (movie) => {

        const title = movie.Title
        const {data} = await Axios.post('./api/movies',{title : title, ThumbsDown: true})

    }


   
    return (
        <section>

            <div className='content-bar'>
                <div>
                    <p>{selected.Plot}</p>
                    <p className='bold-letter'>Director : <span>{selected.Director}</span></p>
                    <p className='bold-letter'>Production : <span> {selected.Production}</span></p>
                    <p className='bold-letter'>Date Release : <span>{selected.Released} </span></p>
                    <p className='bold-letter'>  <span className='star'>
                        <i class="fas fa-star"></i> </span>
                        Score : 
                        {(selected.Metascore !== 'N/A') ? <span> {selected.Metascore}/100   </span> : <span> N/A   </span>}  
                        <button className='thumbs-up'movie={selected} onClick={()=> voteThumbsUp(selected)}> <i class="fas fa-thumbs-up"></i> Like </button>
                        <button className='thumbs-down' movie={selected} onClick={()=> voteThumbsDown(selected)}> <i class="fas fa-thumbs-down">  Unlike</i></button>              
                    </p>
                </div>
            
            </div>
        </section>
    )}