import React, { Component } from 'react';
import Search from "./Search"

class Header extends Component {
    render() {
        return (
        <header>
            <Search callback={this.props.callback}/>
        </header>
        );
    }
}

export default Header;
