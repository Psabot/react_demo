import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Grid from "./Grid"

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
          gifList: []
      };

      this.getGif = this.getGif.bind(this)
      this.removeElement = this.removeElement.bind(this)
  }

  getGif(searchValue) {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=jcLszNMlcMjQUY0vVQD95SNxftSkQgjy&tag=' + searchValue)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          gifList: [...this.state.gifList, responseJson.data.image_original_url]
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  removeElement(key) {
    let remainingArray = this.state.gifList
    remainingArray.splice(key, 1)
    this.setState({
      gifList: remainingArray
    })
  }
  
  render() {
    return (
      <div>
        <Header callback={this.getGif}/>
        <Grid gifList={this.state.gifList} removeElement={this.removeElement}/>
      </div>
    );
  }
}

export default App;
