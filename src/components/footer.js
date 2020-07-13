import React from 'react';

export const Footer = (props) => (    
    <footer className={(!props.Color ? "has-background-info" : "") + " footer pb-5"} style={{ backgroundColor: props.Color}}>
        <div className="content has-text-centered has-text-white">
            <p>
                <strong className="has-text-white">
                    <span role="img" aria-label="cow-emoji"> 🐮 </span> Moovie <span role="img" aria-label="cow-emoji"> 🐮 </span>
                </strong> 
                by <a className="has-text-white" href="https://oscarrc.me">Oscar R.C.</a>
            </p>
            <p>The source code is licensed <a className="has-text-white" href="http://opensource.org/licenses/mit-license.php"> MIT</a>.</p>
            <p>Website data is fetched from <a className="has-text-white" href="http://www.omdbapi.com/">OMDb API</a> and it is licensed under <a className="has-text-white" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0.</a></p>
            <p>All trademarks present on this site are property of their respeective owners</p>
        </div>
    </footer>
);