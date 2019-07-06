import React, {Component,Fragment} from 'react'
import TodoItem from './TodoItem'
// import Test from './Test'
import './style.css'
import axios from 'axios'

class Todolist extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: [],
    };
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    this.handleItemDlete=this.handleItemDlete.bind(this);
  }

  render() {
    // console.log('todolist render')
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容：</label> {/* 注意for用htmlFor代替 */}
          <input
            id='insertArea'
            className='input' // 注意class用className代替
            value={this.state.inputValue}
            onChange={this.handleInputChange} //函数的this绑定组件对象的this
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul)=>{this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
        {/* <Test content={this.state.inputValue} /> */}
      </Fragment>
    );
  }

  componentDidMount() {
    axios.get('/api/todolist')
      .then((res)=>{
        console.log(res.data);
        this.setState(() => ({
          list: [...res.data]
        }))
      })
      .catch((err)=>{alert('出错啦_(:з」∠)_：'+err)})
  }
  
  getTodoItem(){
    return this.state.list.map((item,index) => {
      return (
        <TodoItem 
          key={item}
          content={item} 
          index={index}
          deleteItem={this.handleItemDlete} // this绑定到父组件
        />
      ) 
    })
  }

  handleInputChange(e){
    // console.log(this);
    // 旧版
    /* this.setState({
      inputValue: e.target.value
    }); */
    //新版，对象变函数，异步，将e.target.value存在外层
    const value = e.target.value;
    this.setState(() => ({
        inputValue: value
    }))
  }

  handleBtnClick(){
    /*this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    });*/
    this.setState((prevState) => ({
      list: [...prevState.list,prevState.inputValue],
      inputValue: ''
    }),()=>{
      //console.log(this.ul.querySelectorAll('div').length);
    })

  }

  handleItemDlete(index){
    // immutable
    // state 不允许我们做任何更改，可以修改副本
    /*this.setState({
      list:list
    })*/
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1);
      return{list}
    })
  }

}

export default Todolist;