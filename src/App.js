import React, {Component} from 'react';
import store from './store'
import {getInputChangeAction,add,del} from './store/activeCreators'
import TodoListUI from './UI'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.onMyClick = this.onMyClick.bind(this);
        this.change = this.change.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount(){
        axios.get('/user/login').then(()=>{

        })
    }
    change(e) {
        const action = getInputChangeAction( e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    onMyClick(){
        const action = add();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action = del(index);
       store.dispatch(action)
    }
 render(){
        return  (
            <TodoListUI
                inputValue={this.state.inputValue}
                change={this.change}
                onMyClick={this.onMyClick}
                handleItemDelete={this.handleItemDelete}
                list={this.state.list}
            />
        )
 }
}

export default App;
