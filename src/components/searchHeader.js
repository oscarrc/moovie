import React from 'react';
import { Search } from '../containers/search';

export const SearchHeader = () => (
    <header className="hero is-info is-bold has-text-centered">
        <div className="hero-body">
            <div className="container">                            
                <h1 className="title">
                    <span role="img" aria-label="Moovie Logo">🐮</span> MOOVIE <span role="img" aria-label="Moovie Logo">🐮</span>
                    <br />
                    <small className="is-size-6">( a movie Finder )</small>
                </h1>
            </div>
            <div className="searchForm-wrapper is-flex is-justified-center mt-6">
                <Search />
            </div>
        </div>
    </header>
)