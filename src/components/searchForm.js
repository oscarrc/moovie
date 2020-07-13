import React, { Component } from 'react';

export class SearchForm extends Component {
    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.doSearch(this.props.searchQuery, this.props.page)
    }

    render () {
        return (
            <form onSubmit={ this._handleSubmit }>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input is-rounded"
                            value={this.props.searchQuery}
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