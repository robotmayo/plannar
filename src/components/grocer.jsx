import React from 'react';
import GrocerTitle from './GrocerTitle.jsx';
import GroceryList from './grocery-list.jsx';
import TextToInput from './TextToInput.jsx';

export default function GrocerComponent(props) {
  return (
    <div style={ {visibility : props.hidden === true ? 'hidden' : '' } }>
      <img src={props.listImage} />
      <TextToInput
        showInput={props.showInputForGrocerTitle}
        toggleInputAction={props.toggleGrocerTitleInputAction}
        inputType="text">
        <h1>Pizza</h1>
      </TextToInput>
      <GroceryList 
        updateText={props.updateText}
        addListItem={props.addListItem}
        listItems={props.listItems}
      />
    </div>
  );
}