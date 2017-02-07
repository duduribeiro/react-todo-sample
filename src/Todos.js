import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import ItemList from './ItemList';

const addItem = (item) => {
  return (dispatch) => {
    dispatch({type: 'ITEMS_LOADING'});
    setTimeout(() => {
      dispatch({type: 'ADD_NEW_ITEM', item});
    }, 1500)
  }
}

const editItem = (item) => {
  return (dispatch) => {
    dispatch({type: 'ITEMS_LOADING'});
    setTimeout(() => {
      dispatch({type: 'EDIT_ITEM', item});
    }, 1500)
  }
}

const removeItem = (id) => {
  return (dispatch) => {
    dispatch({type: 'ITEMS_LOADING'});
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ITEM',
        id: id
      })
    }, 1500)
  }
}

class Todos extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  constructor() {
    super();

    // this.state = { editItem: null }
  }

  onNewItemSubmited = (item) => {
    this.props.dispatch(addItem(item))
  }

  onEditItemSubmited = (item) => {
    this.props.dispatch(editItem(item))
    this.props.dispatch({
      type: 'FINISH_EDIT_ITEM'
    })
  }

  toggleItemCompletion = (id) => {
    this.props.dispatch({
      type: "TOGGLE_ITEM_COMPLETION",
      id:   id
    })
  }

  startEditItem = (id) => {
    this.props.dispatch({
      type: 'START_EDIT_ITEM',
      id: id
    })
  }

  removeItem = (id) => {
    this.props.dispatch(removeItem(id))
  }

  render() {
    const editItem = this.props.items.filter(item => {
      return item.id === this.props.activeEditItemId
    })[0]

    return (
      <div>
        <div>
          <ItemForm onNewItemSubmited={this.onNewItemSubmited} onEditItemSubmited={this.onEditItemSubmited} editItem={editItem} />
        </div>
        <div>
          {
            this.props.loading ? <p>Loading...</p> : <ItemList items={this.props.items} onTogglComplete={this.toggleItemCompletion} onEditItem={this.startEditItem} onRemoveItem={this.removeItem}/>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todos,
    loading: state.todosLoading,
    activeEditItemId: state.activeEditItemId
  }
}

export default connect(mapStateToProps)(Todos)
