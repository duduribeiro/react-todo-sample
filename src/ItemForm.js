import React, { Component, PropTypes } from 'react';

export default class ItemForm extends Component {
  static propTypes = {
    onNewItemSubmited: PropTypes.func.isRequired,
    editItem: PropTypes.shape({id: PropTypes.number.isRequired, description: PropTypes.string.isRequired})
  }
  constructor() {
    super();

    this.state = {
      newItem: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.editItem && nextProps.editItem.id) {
      this.setState({
        newItem: nextProps.editItem.description
      })
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    if(this.props.editItem) {
      this.props.onEditItemSubmited({...this.props.editItem, description: this.state.newItem });
    } else {
      const item = {
        description: this.state.newItem,
        completed: false
      }
      this.props.onNewItemSubmited(item);
    }

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
