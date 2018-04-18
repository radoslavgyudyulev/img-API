import React, { Component } from 'react';
import Pictures from './components/Pictures'
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      city: 'Berlin'
    }
  }

  // componentDidMount() {
  //   this.getData()
  // }
  
  getData() {
    const key = 'f903dd7ed060a91e3b5b759d9beb24a5'
    const url = 'api.openweathermap.org/data/2.5/weather?q=Berlin'
    fetch(url, {key})
      .then(response => response.json())
      .then(json => console.log(json))
  }
  
  render() {
    return (
      <div className="App">
      
            <Pictures />
         
      </div>
    );
  }
}

export default App;
