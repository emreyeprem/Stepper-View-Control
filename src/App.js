import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let count = 0
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count : 0,
    }
  }
  increase = () => {
   this.setState({
     count : count ++
   })

  }

  decrease = () => {
  this.setState({
    count : count --
  })

  }



  render() {

   return (
  <div className="container">
   <h2>Stepper View Control</h2>
   <button onClick={this.decrease} type="button" className="btn btn-warning">-</button>
   <button type="button" className="btn btn-outline-primary">{this.state.count}</button>
   <button onClick={this.increase} type="button" className="btn btn-warning">+</button>
  </div>
   )

  }





}

export default App;
