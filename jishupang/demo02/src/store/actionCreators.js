import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM , GET_LIST , GET_MY_LIST} from './actionTypes';
import axios from 'axios';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

// use thunk
export const getTodoListUseThunk = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5d9a2a338c63954ea11dd4df/react-demo01/list')
    .then((res)=>{
      // console.log(res)
      const data = res.data.data
      const action = getListAction(data)
      dispatch(action)
    })
    .catch((err)=>console.log(err))
  }
}

// use saga
export const getTodoListUseSaga = () => ({
  type: GET_MY_LIST
})