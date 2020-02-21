import React, { Component } from 'react';
import Image from "./Image";

class Grid extends Component {
    render() {
        const items = []
        for (const [key, value] of this.props.gifList.entries()) {
            items.push(<Image key={key} indexGif={key} removeElement={this.props.removeElement} image={value} />)
        }
        
        return (
            <div>
                {items}
            </div>
        );
    }
}

export default Grid;
