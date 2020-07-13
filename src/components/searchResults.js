import React from 'react';
import { MoviesList } from './moviesList';

const _renderResults = (results, loading, more) => (
    results.length === 0
            ? <p className="has-text-centered pt-2">Sorry! <span role="img" aria-label="Sad">😔</span> Results not found</p>
            : <MoviesList movies={ results } loading={ loading } more={ more } />
)

export const SearchResults = (props) => (
    <section className="px-4 py-4 is-flex is-justified-center is-aligned-center">                          
        { props.usedSearch
            ? _renderResults(props.results, props.loading)
            : <p className="my-2">Use the form to search a movie <span role="img" aria-label="Search message">🔎</span></p> }
    </section>
)