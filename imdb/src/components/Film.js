import React from 'react'

function FilmItem({name, url}){


        return(
            <>
            
                <h2>Name: <a href= {url} >{name}</a> </h2>

                <a href="https://www.imdb.com/calendar/?region=gb">
                    <button>View more upcoming releases</button>
               </a> 
            </>
        )
    
}
export default FilmItem