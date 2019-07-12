import React, { PureComponent } from 'react'; // 比Component干净，用了immutable管理数据可以用PureComponent，否则较多坑
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import DownloadApp from './components/DownloadApp';
import Writer from './components/Writer';
import {BackTop} from './style';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
}from './style';
import { actionCreators } from './store';

class Home extends PureComponent {

  // 判断某些组件是否需要更新，重新渲染，提高性能
  /*shouldComponentUpdate() {}*/

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4679/5570c9de5caff87a2ae4509d2b61d936fa974816.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <DownloadApp />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>^</BackTop> : null }
      </HomeWrapper>
    )
  }

  //发送请求，获取数据
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  //移除监听
  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

  //返回顶部
  handleScrollTop() {
    window.scrollTo(0,0)
  }

}

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 200){
      dispatch(actionCreators.toggleTopShow(true));
    }else{
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})

export default connect(mapState,mapDispatch)(Home);