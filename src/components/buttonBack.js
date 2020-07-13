import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBack = () => (
    <Link to="/" className="button is-info is-light is-rounded">
        <span className="icon is-size-4">
            <i className="mdi mdi-arrow-left"></i>
        </span>
    </Link>
);