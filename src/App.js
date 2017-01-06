import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todos from './Todos';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const itemsReducer = (state = [{ id: 1, description: 'My Task', completed: true }], action) => {
  switch (action.type) {
    case 'ADD_NEW_ITEM':
      return [...state, { ...action.item, id: state.length + 1 }]
    case 'TOGGLE_ITEM_COMPLETION':
      return state.map(item => {
        if (item.id === action.id) {
          return {...item, completed: !item.completed }
        }
        return item
      })
    default:
      return state
  }
}

const reducers = combineReducers({
  todos: itemsReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ToDo List</h2>
        </div>
        <Provider store={store}>
          <Todos />
        </Provider>
      </div>
    );
  }
}

export default App;
