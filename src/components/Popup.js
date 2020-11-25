import React, {useState} from 'react'

export default function Popup ({selected}) {
    console.log('popup function', selected)

   

    return (
        <section>
            <div> 
            <p>{selected.Plot}</p>
            <h4>Director : {selected.Director}</h4>
            <h3>{selected.vote_average}</h3>
           
            <button> Thumbs Up</button>
            <button> Thumbs Down</button>
            </div>
        </section>
    )
}