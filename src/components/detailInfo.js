import React from 'react';

export const DetailInfo = (props) => (
    <section className="container py-6 px-5">
        <div className="columns">
            <div className="column is-one-fifth">
                <div className="box">                                
                    <p><span role="img" aria-label="director">📹</span> { props.Director }</p>                         
                    <p><span role="img" aria-label="released">🚀</span> { props.Released }</p>                                
                    <p><span role="img" aria-label="dvd">💿</span> { props.DVD }</p>
                    <p><span role="img" aria-label="duration">⏱</span> { props.Runtime }</p>
                    <p><span role="img" aria-label="country">🌍</span> { props.Country }</p>
                </div>
            </div>
            <div className="column">
                <p><i>{ props.Plot }</i></p>
            </div>
        </div>
    </section>
)