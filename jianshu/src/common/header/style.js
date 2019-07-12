import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
import betaPic from '../../statics/beta.png'


export const HeaderWrapper = styled.div `
  position: relative;
  margin: 0;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
}
`

export const HeaderFixed = styled.div `
  position: fixed;
  margin: 0;
  height: 56px;
  width: 100%;
  background: #fff;
}
`

export const WidthLimit = styled.div `
  position: relative;
  height: 56px;
  margin: 0 39.6px;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic}); /*注意不能在这里直接引入url，否则找不到*/
  background-size: contain;
`

export const Nav = styled.div `
  width: 980px;
  height: 100%;
  margin 0 auto;
`

export const NavItem = styled.div `
  line-height: 26px;
  padding: 15px;
  font-size: 17px;
  color: #333
  &.left{
    float: left;
    padding-left: 30px;
    :hover{ 
      background-color: #eee;
    }
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.login{
    font-size: 15px;
    cursor: pointer;
  }
  &.active{
    color: #ea6f5a;
  }
`

export const Beta = styled.a.attrs({
  href:'/beta'
}) `
  display: block;
  margin: 0;
  padding: 0;
  width: 57px;
  height: 26px;
  background: url(${betaPic});
  background-size: contain;
  background-repeat: no-repeat;
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom{
    position: absolute;
    right: 3px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    /*background: green;*/
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}
)`
  width: 238px;
  height: 38px;
  padding: 0 38px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box; /* 160px不被撑开 */
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #333;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 320px;
  }
  &.slide-enter {
    transition: all .4s ease-out;
  }
  &.slide-enter-active {
    width: 320px
  }
  &.slide-exit {
    transition: all .4s ease-out;
  }
  &.slide-exit-active {
    width: 238px
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 210px;
  margin-left:20px
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  z-index: 1;
  background-color: #fff;
  :before {
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;
    position: absolute;
    background-color: #fff;
  }
`

export const SearchInfoTitle = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  .spin{
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin: 10px 10px 0 0;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  padding: 6px 12px;
  line-height: 22px;
  border-radius: 19px;
  border: 1px solid #ea6f5a;
  font-size: 15px;
  &.writting{
    width: 74px;
    height: 26px;
    text-align: center;
    margin: 8px 12px 0 12px;
    color: #fff;
    background: #ea6f5a;
  }
  &.reg{
    width: 54px;
    height: 24px;
    text-align: center;
    margin: 9px 5px 0 15px;
    color: #ea6f5a;
  }
`