import React, {Component} from 'react'; //jsx
import { Provider } from 'react-redux'; //store
import { BrowserRouter, Route } from 'react-router-dom'; //Route

import Header from './common/header';
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'

import store from './store';

import {GlobalStyle} from './style.js';
import {GlobalIconFontStyle} from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <GlobalIconFontStyle/>
        <BrowserRouter>
          <Header/>
          
          <Route path='/' exact component={Home}></Route>{/* <Route path='/' exact render={()=><div>home</div>}></Route> */}
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>{/* 第1种：/detail/idname */}
          {/* <Route path='/detail' exact component={Detail}></Route> */}{/* 第2种：/detail?id=idname */}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
