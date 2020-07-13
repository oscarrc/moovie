import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = (props) => (
    <Link to={`/detail/${props.id}`}>
        <article className="card card-equal-height">
            <div className="card-image">
                <figure className="image">
                    <img 
                        onError={ (e) => e.target.src =  "https://via.placeholder.com/300x450?text=No+image+available" }
                        src={ props.Poster } 
                        alt={ props.Title } />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{ props.Title }</p>
                        <p className="subtitle is-6">{ props.Year }</p>
                    </div>
                </div>
            </div>
        </article>
    </Link>
)