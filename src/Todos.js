import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import ItemList from './ItemList';

class Todos extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  onNewItemSubmited = (item) => {
    // const id = this.props.items.length + 1;
    this.props.dispatch({
      type: "ADD_NEW_ITEM",
      item
    })
  }

  toggleItemCompletion = (id) => {
    this.props.dispatch({
      type: "TOGGLE_ITEM_COMPLETION",
      id:   id
    })
  }

  render() {
    return (
      <div>
        <div>
          <ItemForm onNewItemSubmited={this.onNewItemSubmited}  />
        </div>
        <div>
          <ItemList items={this.props.items} onTogglComplete={this.toggleItemCompletion} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todos
  }
}

export default connect(mapStateToProps)(Todos)
