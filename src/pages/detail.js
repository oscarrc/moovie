import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ColorExtractor } from 'react-color-extractor'

import { DetailHeader } from '../components/detailHeader';
import { DetailInfo } from '../components/detailInfo';
import { Footer } from '../components/footer';

const API_KEY = "a67275ce";

export class Detail extends Component {
    static propTypes = {
        //match es injectado por react-router
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        }),
        movie: PropTypes.object
    }

    state = { movie: {}, color: "" }

    _fetchMovie = ({ id }) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
            .then( res => res.json() )
            .then( movie => {
                this.setState({ movie })
            })
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this._fetchMovie({ id });
    }


    render() {
        const { Title, Poster, Actors, imdbRating, Plot, Genre, Released, Runtime, Director, Rated, Country, DVD} = this.state.movie;
        return (
            <Fragment>
                <ColorExtractor
                    src={Poster || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="}
                    getColors={colors => this.setState({ color: colors[2] })}
                />
                <DetailHeader
                    Actors={Actors}
                    Title={Title}
                    Poster={Poster}
                    imdbRating={imdbRating}
                    Genre={Genre}
                    Rated={Rated}
                    Color={ this.state.color }
                />
                <DetailInfo 
                    Director={Director}
                    Runtime={Runtime}
                    Released={Released}
                    DVD={DVD}
                    Country={Country}
                    Plot={Plot}
                />
                <Footer Color={ this.state.color }/>
            </Fragment>
        )
    }
}