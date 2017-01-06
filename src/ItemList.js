import React, { Component, PropTypes } from 'react';

export default class ItemList extends Component {
  static propTypes = {
    onTogglComplete: PropTypes.func.isRequired
  }

  onChangeCompleteItem = (event) => {
    const id    = parseInt(event.target.id, 10);
    this.props.onTogglComplete(id);
  }

  render() {
    return(
      <ul>
        {
          this.props.items.map(item => (
            <li key={item.id}>
              <input type="checkbox" id={item.id} onChange={this.onChangeCompleteItem} defaultChecked={item.completed} />
                <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.description}</span>
            </li>
          ))
        }
      </ul>
    )
  }
}
