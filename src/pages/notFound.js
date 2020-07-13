import React from 'react';
import { ButtonBack } from '../components/buttonBack';

export const NotFound = () => (
    <section className="hero is-fullheight is-info is-bold">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title has-text-weight-bold">
                    404 !!!
                </h1>
                <h2 className="subtitle">
                    Page was not found <span role="img" aria-label="surprised">😮</span>
                </h2>
                <ButtonBack />
            </div>
        </div>
    </section>
)