import React, { Component } from 'react';
import { ButtonBack } from '../components/buttonBack';

export class DetailHeader extends Component {
    _renderRatingTag = ( rating ) => {
        let color;
        let emoji;

        if(rating < 5 ){
            color = "danger";
            emoji = "🥱";
        }else if(rating < 7 ){
            color= "warning";
            emoji = "🤔";
        }else if(rating < 8 ){
            color= "primary";
            emoji = "😊";
        }else{
            color="success";
            emoji = "🤩";
        }
        
        return (
            <div className="tags has-addons is-inline ml-2">
                <span className={'tag is-' + color} >{ rating }</span>                
                <span className="tag" role="img" aria-label="emoji">{ emoji }</span>
            </div>
        )
    }

    _renderMpaaRating = ( rating ) => {
        let color;

        switch(rating){
            case "X":
            case "R":
            case "NC-17":
                color="danger";
                break;
            case "PG-13":
                color="warning";
                break;
            case "PG":
            case "G":
                color="success";
                break;
            default:
                color="light";
        }

        return <span className={'tag is-' + color} >{ rating }</span>
    }

    render() {
        const {Actors, Title, Poster, imdbRating, Genre, Rated, Color } = this.props;
        
        return (
            <header id="detail" className="hero is-info" style={{ backgroundColor: Color}}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-one-fifth">
                                <figure className="image">                                
                                    <img 
                                        onError={ (e) => e.target.src = "https://via.placeholder.com/300x450?text=No+image+available" }
                                        src={ Poster } 
                                        alt={ Title } 
                                    />
                                </figure>
                            </div>
                            <div className="column detail-info">
                                <h1 className="title">
                                    { Title } { this._renderRatingTag(imdbRating) }
                                </h1>
                                <h2 className="subtitle">{ Actors }</h2>                                    
                                { this._renderMpaaRating(Rated) }
                                <span className="tag ml-4" >{ Genre }</span>
                            </div>
                            <div className="column is-one-fifth has-text-right">
                                <ButtonBack />
                            </div>
                        </div>
                    </div>
                </div>
            </header>  
        )
    }
}