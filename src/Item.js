import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({id: PropTypes.number.isRequired, completed: PropTypes.bool.isRequired}),
    onEditItem: PropTypes.func.isRequired,
    onTogglComplete: PropTypes.func.isRequired
  }

  onChangeCompleteItem = (event) => {
    this.props.onTogglComplete(this.props.item.id);
  }

  onClickEdit = (event) => {
    event.preventDefault();
    this.props.onEditItem(this.props.item.id);
  }

  onClickRemove = (event) => {
    event.preventDefault();
    this.props.onRemoveItem(this.props.item.id);
  }

  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.onChangeCompleteItem} defaultChecked={this.props.item.completed} />
          <span style={{textDecoration: this.props.item.completed ? 'line-through' : 'none'}}>{this.props.item.description}</span>
          <span> - <a onClick={this.onClickEdit} href="#">Edit</a></span>
          <span> - <a onClick={this.onClickRemove} href="#">Remove</a></span>
      </li>
    )
  }
}
