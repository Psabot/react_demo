import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div className="box" style={{backgroundImage: "url(" + this.props.image + ")" }}>
                <button className="delete" onClick={() => this.props.removeElement(this.props.indexGif)}>X</button>
            </div>
        );
    }
}

export default Image;
