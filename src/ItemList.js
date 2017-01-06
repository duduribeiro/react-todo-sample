import React, { Component, PropTypes } from 'react';
import Item from './Item';

export default class ItemList extends Component {
  static propTypes = {
    onTogglComplete: PropTypes.func.isRequired
  }


  render() {
    return(
      <ul>
        {
          this.props.items.map(item => (
            <Item {...this.props } key={item.id} item={item} />

          ))
        }
      </ul>
    )
  }
}
