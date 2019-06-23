//import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import Header from './components/formart/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {

  state = {
    main: [

    ]
  }
  markDone = (id) => {
    this.setState({
      main: this.state.main.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        } return item;
      })
    })
  }
  del = (id) => {
    this.setState({ main: [...this.state.main.filter(item => item.id !== id)] });
  }

  addTodo = (title) => {
    const newItem = {
      id: uuid.v4(),
      title,            //equivalent to title:title
      done: false
    }
    this.setState({ main: [...this.state.main, newItem] });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todo value={this.state.main} markDone={this.markDone} del={this.del} />
        </div>
      </div>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>App</h1>
//     </div>
//   );
// }


