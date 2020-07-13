import React, { Component } from 'react';

export class SearchForm extends Component {
    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.doSearch(this.props.searchQuery, this.props.page);
    }

    _handleScroll = (e) => {
        let scrolled = window.scrollY;
        let total = document.getElementById("App").offsetHeight;
        
        if(scrolled >= total*0.6 && !this.props.loading && this.props.more){
            this.props.nextPage(this.props.searchQuery, this.props.page);
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this._handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this._handleScroll);
    }

    render () {
        return (
            <form onSubmit={ this._handleSubmit }>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input is-rounded"
                            value={ this.props.searchQuery }
                            type="search" 
                            onChange={ this.props.setQuery }
                            placeholder="Find a movie" />
                    </div>
                    <div className="control">
                        <button className="button is-info is-light is-rounded">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}