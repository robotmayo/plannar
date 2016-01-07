import React from 'react';
import List from './list.jsx';
import GroceryListItem from './grocery-list-item.jsx';

function transformGroceryItems(props, item){
  return <GroceryListItem
    blurAction={props.toggleEditAction}
    editing={props.isEditing}
    text={item.text}
    removeAction={ _ => props.removeAction(item.id) }
    editAction={ _ => props.editAction(item.id) }
    toggleEditAction={props.toggleEditAction}
  />;
}

export default function GroceryListComponent(props) {
  return (
    <div style={props.style}>
      <input type="text" onChange={props.updateText} />
      <button onClick={props.addListItem}>Add</button>
      <List items={props.listItems.map(transformGroceryItems.bind(null, props))} />
    </div>
  );
}

GroceryListComponent.propTypes = {
  updateText : React.PropTypes.func,
  addListItem : React.PropTypes.func,
  removeAction : React.PropTypes.func,
  editAction : React.PropTypes.func,
  toggleEditAction : React.PropTypes.func,
  listItems : React.PropTypes.array,
  isEditing : React.PropTypes.bool
};




