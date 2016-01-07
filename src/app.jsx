import React from 'react';
import ReactDOM from 'react-dom';
import {store, actions} from './rdx/app';
import {actions as GroceryListActions} from './rdx/grocery-list';
import Grocer from './components/grocer.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.state = store.getState();
    store.subscribe( _ => this.setState(store.getState()));
  }

  createNewWeek(evt){
    store.dispatch(GroceryListActions.CreateNewList());
    store.dispatch(actions.ToggleGroceryListVisibility(true));
  }

  updateText(evt){
    store.dispatch(GroceryListActions.UpdateGroceryText(evt.target.value));
  }

  addListItem(evt){
    store.dispatch(GroceryListActions.AddGroceryItem(this.state.currentGroceryList.groceryText));
  }

  editAction(id, evt){
    store.dispatch(actions.UpdateItemText(id, evt.target.value));
  }

  toggleEditAction(evt){
    store.dispatch(actions.ToggleEdit());
  }

  removeAction(id){
    store.dispatch(actions.RemoveGroceryItem(id));
  }
  toggleGrocerTitleInputAction(){
    store.dispatch(actions.ToggleGrocerTitleInput(true));
  }

  render() {
    return (
      <div>
        <h1>Meal Plannar App</h1>
        <button onClick={this.createNewWeek.bind(this)}>New Week</button>
        <Grocer
          showInputForGrocerTitle={this.state.grocerTitleInputVisibility}
          toggleGrocerTitleInputAction={this.toggleGrocerTitleInputAction.bind(this)}
          hidden={this.state.groceryListVisibilty}  
          updateText={this.updateText.bind(this)}
          addListItem={this.addListItem.bind(this)}
          listItems={this.state.currentGroceryList.items}
          listImage={"http://cuisineclipart.com/1024/cuisine-clipart-of-a-slice-of-cheese-pizza-mascot-cartoon-character-waving-and-pointing-by-toons4biz-771.jpg"}
        />
      
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('container'));
