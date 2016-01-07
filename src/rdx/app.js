import { createStore, combineReducers } from 'redux';
import {GroceryListState} from './grocery-list';

const TOGGLE_GROCERY_LIST_VISIBILITY = 'TOGGLE_GROCERY_LIST_VISIBILITY';
const TOGGLE_GROCER_INPUT_VISIBILITY = 'TOGGLE_GROCER_INPUT_VISIBILITY';

export const actions = {
  ToggleGroceryListVisibility(visibility){
    return {
      type : TOGGLE_GROCERY_LIST_VISIBILITY,
      visibility
    };
  },
  
  ToggleGrocerTitleInput(visibility){
    return {
      type : TOGGLE_GROCER_INPUT_VISIBILITY,
      visibility
    };
  }
};

function groceryListVisibilty(state = false, action){
  if(action.type === TOGGLE_GROCERY_LIST_VISIBILITY) return action.visibility === true;
  return state;
}
function grocerTitleInputVisibility(state = false, action) {
  if(action.type === TOGGLE_GROCER_INPUT_VISIBILITY) return action.visibility === true;
  return state;
}



export const store = createStore(combineReducers({
  currentGroceryList : GroceryListState,
  groceryListVisibilty,
  grocerTitleInputVisibility
}));
