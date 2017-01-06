import React, { Component, PropTypes } from 'react';

export default class ItemForm extends Component {
  static propTypes = {
    onNewItemSubmited: PropTypes.func.isRequired
  }
  constructor() {
    super();

    this.state = {
      newItem: ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const item = {
      description: this.state.newItem,
      completed: false
    }
    this.props.onNewItemSubmited(item);
    this.setState({
      newItem: ''
    })
  }

  onDescriptionChange = (event) => {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.newItem} onChange={this.onDescriptionChange} />
        <button type="submit" />
      </form>
    )
  }
}
