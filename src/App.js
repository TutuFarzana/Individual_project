import React, { Component } from 'react';
import './App.css';
import books from './Datas/data';
import DisplayBooks from './Components/displaybooks';

class App extends Component { 
  state = {
    count: 0
  }
  addToCart = () =>{
    this.setState({ count:  this.state.count + 1});
  }
  removeFromCart =() => {
    this.setState({ count:  this.state.count - 1});
  }
  render() {  
    return(
      <React.Fragment>
        <div className="App">
          <p>{this.state.count}</p>
          <DisplayBooks 
            addToCart = {this.addToCart}
            removeFromCart = {this.removeFromCart}
          />
        </div>
        
      </React.Fragment>
    );
  }
}

export default App;
