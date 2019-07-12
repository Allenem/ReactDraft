import { fromJS } from 'immutable'; //将js对象转化为immutable对象
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state,action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
}

const addArticleList = (state,action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list), // 在原来的上面追加新数据
    'articlePage': action.nextPage
  });
}


export default (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
      // state.set('topicList',fromJS(action.topicList)); // 比较low，用merge
      return changeHomeData(state,action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state,action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show);
    default:
      return state;
  }
}