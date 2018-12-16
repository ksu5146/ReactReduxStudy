import React, { Component } from 'react';
import './App.css';
import PhonForm from './PhonForm';

class App extends Component {

 id = 0;
 state = {
   information :[],
 }

 handleCreate = (data) => {
  const { information } = this.state ; 

    this.setState({
      information : information.concat({
        ...data , 
        id: this.id++})
    });
  }

  render() {
    return (
      <div className="App">
        <PhonForm onCreate={this.handleCreate}/>
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
