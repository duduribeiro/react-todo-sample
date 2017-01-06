import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ItemForm from './ItemForm';
import ItemList from './ItemList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        { id: 1, description: 'My Task', completed: true }
      ]
    }
  }



  onNewItemSubmited = (item) => {
    const id = this.state.items.length + 1;
    this.setState({
      items: [...this.state.items, {...item, id }]
    })
  }

  toggleItemCompletion = (id) => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        return {...item, completed: !item.completed }
      }
      return item
    })
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ToDo List</h2>
        </div>
        <div>
          <div>
            <ItemForm onNewItemSubmited={this.onNewItemSubmited}  />
          </div>
          <div>
            <ItemList items={this.state.items} onTogglComplete={this.toggleItemCompletion} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
