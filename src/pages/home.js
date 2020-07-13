import React, { Component, Fragment } from 'react';
import { SearchHeader } from '../components/searchHeader';
import { Footer } from '../components/footer';
import { Results } from '../containers/search';

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <SearchHeader />
                <Results />
                <Footer />
            </Fragment>
        )
    }
}