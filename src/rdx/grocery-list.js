import { createStore } from 'redux';

const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
const UPDATE_GROCERY_TEXT = 'UPDATE_GROCERY_TEXT';
const REMOVE_GROCERY_ITEM = 'REMOVE_GROCERY_ITEM';
const TOGGLE_EDIT = 'TOGGLE_EDIT';
const UPDATE_ITEM_TEXT = 'UPDATE_ITEM_TEXT';
const CREATE_NEW_LIST = 'CREATE_NEW_LIST';

let nextId = 0;

function AddGroceryItem(text){
  return {
    type : ADD_GROCERY_ITEM,
    text,
    id : nextId++
  };
}

function UpdateGroceryText(text){
  return {
    type : UPDATE_GROCERY_TEXT,
    text
  };
}

function RemoveGroceryItem(id){
  return {
    type : REMOVE_GROCERY_ITEM,
    id
  };
}

function ToggleEdit(){
  return {
    type : TOGGLE_EDIT
  };
}

function UpdateItemText(id, text){
  return {
    type : UPDATE_ITEM_TEXT,
    text,
    id
  };
}

function CreateNewList(){
  return {
    type : CREATE_NEW_LIST
  };
}

export const actions = {
  AddGroceryItem : AddGroceryItem,
  UpdateGroceryText : UpdateGroceryText,
  RemoveGroceryItem : RemoveGroceryItem,
  ToggleEdit : ToggleEdit,
  UpdateItemText : UpdateItemText,
  CreateNewList : CreateNewList
};

const initialState = {
  items : [],
  groceryText : '',
  editing : false
};

export function GroceryListState(state = initialState, action){
  switch(action.type){
    case ADD_GROCERY_ITEM:
      state.items = state.items.concat({id : action.id, text : action.text});
      console.log(state, action);
      return state;
    case UPDATE_GROCERY_TEXT:
      state.groceryText = action.text;
      return state;
    case REMOVE_GROCERY_ITEM:
    console.log(action);
      state.items = state.items.filter(item => item.id !== action.id);
      return state;
    case TOGGLE_EDIT:
      state.editing = !state.editing;
      return state;
    case UPDATE_ITEM_TEXT:
      state.items = state.items.map( item => {
        if(item.id === action.id) return Object.assign({}, item, {text : action.text});
        return item;
      });
      return state;
    case CREATE_NEW_LIST:
      return initialState;
  }
  return state;
}
