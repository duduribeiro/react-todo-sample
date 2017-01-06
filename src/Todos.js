import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import ItemList from './ItemList';

class Todos extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  onNewItemSubmited = (item) => {
    this.props.dispatch({
      type: 'ITEMS_LOADING'
    })

    setTimeout(() => {
      this.props.dispatch({
        type: "ADD_NEW_ITEM",
        item
      })
    }, 3000)

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
          {
            this.props.loading ? <p>Loading...</p> : <ItemList items={this.props.items} onTogglComplete={this.toggleItemCompletion} />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todos,
    loading: state.todosLoading
  }
}

export default connect(mapStateToProps)(Todos)
