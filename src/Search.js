import React, { Component } from 'react';

class Search extends Component {

    state = {
        searchValue: ''
    };

    handleChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.callback(this.state.searchValue)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Search for GIF : 
                <input type="text" name="name" value={this.state.searchValue} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Chercher" />
            </form>
        );
    }
}

export default Search;
