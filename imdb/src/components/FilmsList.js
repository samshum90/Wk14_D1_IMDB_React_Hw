import React from 'react';
import FilmItem from './Film';

function FilmList({Films}){
 
 
    return(
            Films.map(Film =>(
                <FilmItem key={Film.id} {...Film} />
            )))
    
}
export default FilmList