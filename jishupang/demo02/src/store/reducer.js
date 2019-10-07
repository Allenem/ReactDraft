import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM , GET_LIST } from './actionTypes';

const defaultState = {
  inputValue:'Write something',
  list: []
}

export default (state = defaultState,action) => {
  // console.log(state,action)

  // Reducer里只能接受state，不能改变state
  if(action.type === CHANGE_INPUT){
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === DELETE_ITEM){
    // console.log(action.index)
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }

  if(action.type === GET_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }

  return state
}