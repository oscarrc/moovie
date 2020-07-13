import React from 'react';
import { Movie } from './movie';

export const MoviesList = (props) => (
    <div className="columns is-multiline">
        {
            props.movies.map( movie => {
                return (
                    <div key={ movie.imdbID } className="column is-one-third is-one-quarter-desktop">
                        <Movie
                            id={ movie.imdbID }                                
                            Title={ movie.Title }
                            Year={ movie.Year }
                            Poster={ movie.Poster }
                        />
                    </div>
                )
            })
        }
    </div>
)