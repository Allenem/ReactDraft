import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom' //实现单页应用
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
  HeaderWrapper,
  HeaderFixed,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  Beta,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
}from './style'

class Header extends Component {

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
    return (
      <Fragment>
        <HeaderWrapper>
          <HeaderFixed>
          <WidthLimit>
            <Link to='/'>
              <Logo/>
            </Link>
            <Nav>
              <Link to='/'>
                <NavItem className='left active'>
                  <span className="iconfont">&#xe66d;</span>
                  首页
                </NavItem>
              </Link>
              <a href='https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps'>
                <NavItem className='left'>
                  <span className="iconfont">&#xe600;</span>
                  下载App
                </NavItem>
              </a>
              {
                login?
                <NavItem onClick={logout} className='right login'>退出</NavItem>:
                <Link to='/login'><NavItem className='right login'>登录</NavItem></Link>
              }
              
              <NavItem className='right'><Beta/></NavItem>
              <NavItem className='right'>
                <span className="iconfont">&#xe636;</span>
              </NavItem>
              <SearchWrapper>
                <CSSTransition
                  in={focused}
                  timeout={400}
                  classNames='slide'
                >
                  <NavSearch
                    className={focused?'focused':''}
                    onFocus={() => handleInputFocus(list)}
                    onBlur={handleInputBlur}
                  ></NavSearch>
                </CSSTransition>
                <span 
                  className={focused?'focused iconfont zoom':'iconfont zoom'}
                >
                  &#xe646;
                </span>
                {this.getListArea()}
              </SearchWrapper>
            </Nav>
            <Addition>
              <Link to='/write'>
                <Button className='writting'>
                  <span className="iconfont">&#xe630;</span>
                  写文章
                </Button>
              </Link>
              <Button className='reg'>注册</Button>
            </Addition>
          </WidthLimit>
          </HeaderFixed>
        </HeaderWrapper>
      </Fragment>
    )
  }

  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const jsList = list.toJS()
    const pageList = [];

    if(jsList.length){
      for(let i=(page-1)*10; i<page*10; i++){
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }

    if(focused || mouseIn){
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
            >
              <span 
                ref={(icon) => {this.spinIcon = icon}}
                className="iconfont spin"
              >
                &#xe602;
              </span>
              换一批
            </SearchInfoSwitch>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }

}

const mapStateToProps = (state) =>{
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login','login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if (originAngle) {
        originAngle = parseInt(originAngle,10); // 转换成十进制数字
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
      console.log(originAngle);
      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);