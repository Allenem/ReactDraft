import React, { Component } from 'react';
import store from './store';
import { changeInputAction , addItemAction , deleteItemAction , getTodoListUseThunk , getTodoListUseSaga} from './store/actionCreators';
import TodolistUINoState from './TodolistUINoState';

class Todolist extends Component {

  constructor(props){
    super(props)
    // console.log(store.getState())
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  render() { 
    return ( 
      <TodolistUINoState
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        changeInputValue = {this.changeInputValue}
        clickBtn = {this.clickBtn}
        deleteItem = {this.deleteItem}
      />
    );
  }

  storeChange(){
    this.setState(store.getState())
  }

  changeInputValue(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  clickBtn(){
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index){
    // console.log(index)
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  /*
  // without middleware
  componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5d9a2a338c63954ea11dd4df/react-demo01/list')
    .then((res)=>{
      // console.log(res)
      const data = res.data.data
      const action = getListAction(data)
      store.dispatch(action)
    })
    .catch((err)=>console.log(err))
  }
  */

  
  // // use thunk
  // componentDidMount(){
  //   const action = getTodoListUseThunk()
  //   store.dispatch(action)
  // }

  // use saga
  componentDidMount(){
    const action = getTodoListUseSaga()
    store.dispatch(action)
  }
}
 
export default Todolist;