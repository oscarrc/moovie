import React from 'react';
import { Movie } from './movie';

const Loader = (loading) => {
    if (loading){
        return (
            <div className="column is-one-third is-one-quarter-desktop is-flex is-justified-center is-aligned-center">
                <span className="icon is-large is-rotating spin">
                    <i className="mdi mdi-loading mdi-48px"></i>
                </span>
            </div>
        )
    }
}

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
        <Loader loading={props.loading} />
    </div>
)