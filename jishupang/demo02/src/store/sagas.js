import { takeEvery , put } from 'redux-saga/effects';
import { GET_MY_LIST } from './actionTypes';
import { getListAction } from './actionCreators';
import axios from 'axios';

// generator
function* mySagas(){
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
  // console.log('aaa')
  // axios.get('https://www.easy-mock.com/mock/5d9a2a338c63954ea11dd4df/react-demo01/list')
  // .then((res)=>{
  //   // console.log(res)
  //   const data = res.data.data
  //   const action = getListAction(data)
  //   put(action)
  // })
  // .catch((err)=>console.log(err))

  const res = yield axios.get('https://www.easy-mock.com/mock/5d9a2a338c63954ea11dd4df/react-demo01/list')
  const action = getListAction(res.data.data)
  yield put(action) 
}

export default mySagas