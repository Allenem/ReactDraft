# React Learning（Day1）(2019.7.5)

>日常挤牙膏

## 一、React的环境搭建

- 安装好[nodejs](https://nodejs.org/en/)和npm
- 全局安装脚手架工具**create-react-app**
```bash
  npm install -g create-react-app
```
- 用脚手架创建应用，比如创建todolist
```bash
  create-react-app todolist
```
- 创建好后运行以下语句
```bash
  cd todolist
  npm start
```
- 默认浏览器自动打开 http://localhost:3000/ 页面
- 更改默认端口打开文件 node_modules\react-scripts\scripts\start.js，修改以下语句即可
```js
// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
```


## 二、文件结构

```
todolist
│
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│
├─node_modules
│
├─public
│      favicon.ico
│      index.html
│      manifest.json
│
└─src
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
        serviceWorker.js
```
```
- public文件夹
  - index.html         //主页面文件
  - manifest.json      //生成APP或者快捷方式的配置
- src文件夹
  - index.js           //整个程序运行的入口文件，逐行运行
  - App.js             //index.js引入的渲染页面文件

  //下面的文件均可删除
  - index.css          //index.js引入的样式
  - App.css            //App.js引入的的样式
  - logo.svg           //App.js引入的的图片
  - serviceWorker.js   //index.js引入的文件，PWA progressive web application，https第一次访问，之后断网也能看见
  - App.test.js        //APP.js页面自动化测试文件
```

## 三、JSX语法

```js
import React from 'react';

return (
  <div className="hello">
    <div className={state.color}>Hello  {state.color} world</div>
  </div>
);
```

渲染时，大写的标签是组件，小写的标签是常规的html5标签。

## 四、Todolist.js编写

```js
import React, {Component,Fragment} from 'react'
import './style.css'

class Todolist extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* 注释写法1 */}
          {
            // 注释写法2
          }
          <label htmlFor='insertArea'>输入内容：</label> 
          {/* 注意for用htmlFor代替 */}
          <input
            id='insertArea'
            className='input' // 注意class用className代替
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)} //函数的this绑定组件对象的this
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return (
                <li 
                  key={index} 
                  onClick={this.handleItemDlete.bind(this,index)}
                  dangerouslySetInnerHTML={{__html: item}}
                >
                </li>
              ) 
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e){
    // console.log(this);
    this.setState({
      inputValue: e.target.value
    });
  }

  handleBtnClick(){
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    });
  }

  handleItemDlete(index){
    // immutable
    // state 不允许我们做任何更改，可以修改副本
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    })
  }

}

export default Todolist;
```