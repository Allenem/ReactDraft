import React, {Component,Fragment} from 'react'
import './style.css'
import Todoitem from './Todoitem'
import Boss from './Boss'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Todolist extends Component{

  constructor(props){
    super(props)
    this.state = {
			inputValue: '',
			// list: ['语文','英语','数学']
      list:[]
    }
    this.inputChange = this.inputChange.bind(this)
    this.addList = this.addList.bind(this)
    // this.deleteItem = this.deleteItem.bind(this)
  }

  render(){
		// console.log('02-13-render----开始挂载渲染')
    return(
      <Fragment>
				<div>
					<label htmlFor="focus">输入内容：</label>
					<input 
						id="focus" 
						className="input" 
						value={this.state.inputValue} 
						onChange={this.inputChange} 
						ref = {(input) => {this.input = input}}
					/>
          <button onClick={this.addList}>增加项目</button>
        </div>
				<ul ref = {(ul)=>{this.ul=ul}}>
					<TransitionGroup>
						{
							this.state.list.map((item,index) => {
								return (
									<CSSTransition
										timeout={2000}
										classNames="boss-text"
										unmountOnExit
										key={index+item}
										appear={true}
									>
										<Todoitem 
											commonName='复习'
											key={index+item}
											content={item}
											index={index}
											deleteItem={() => this.deleteItem(index)}
										/>
									</CSSTransition>
								)
							})
						}
					</TransitionGroup>
				</ul>
				<Boss />
      </Fragment>
    )
  }

  // 改变input
  inputChange(e){
    // console.log(e.target.value)
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }

  // 点击button增加列表
  addList(){
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      // <=>list: ['复习数学','复习英语',this.state.inputValue]
      inputValue: ''
    },() => {
			console.log(this.ul.querySelectorAll('li').length)
		})
  }

  // 点击条目删除
  deleteItem(index){
		// console.log(index)
		let list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})
	}

	componentDidMount(){
		// axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
		// axios.post('https://baidu.com')
		axios.get('https://www.easy-mock.com/mock/5d9a2a338c63954ea11dd4df/react-demo01/list')
			.then((res)=>{
				console.log('axios获取数据成功'+JSON.stringify(res))
				this.setState({
					list: res.data.data
				})
			})
			.catch((err)=>{console.log('axios获取数据失败'+err)})
	}
	

	// 生命周期函数 START
	/*
	componentWillMount(){
    console.log('01-componentWillMount----组件将要挂载到页面的时刻')
	}

	componentDidMount(){
			console.log('03-componentDidMount----组件挂载完成的时刻执行')
	}

	shouldComponentUpdate(){
    console.log('11-shouldComponentUpdate---组件发生改变前执行')
    return true
	}
	// 现在就可以在控制台console里看到结果了，并且结果是每次文本框发生改变时都会随着改变。如果你返回了false，这组件就不会进行更新了。 简单点说，就是返回true，就同意组件更新;返回false,就反对组件更新。

	// shouldComponentUpdate返回true才会被执行。
	componentWillUpdate(){
			console.log('12-componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
	}
	
	// componentDidUpdate在组件更新之后执行，它是组件更新的最后一个环节。
	componentDidUpdate(){
			console.log('15-componentDidUpdate----组件更新之后执行')
	}
	*/
  // 生命周期函数 END

}

export default Todolist