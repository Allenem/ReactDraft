import { fromJS } from 'immutable'; //将js对象转化为immutable对象
import * as constants from './constants';

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
        return state.merge({
          title: action.title,
          content: action.content
        });
    default:
      return state;
  }
}