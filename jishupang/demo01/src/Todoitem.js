import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todoitem extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() { 
    console.log('child-renser')
    // 解构赋值
    const { commonName,content } = this.props
    return ( 
      <li onClick={this.handleClick} >
        {commonName} - {content}
      </li>
     )
  }

  handleClick(){
    // 解构赋值
    const { deleteItem,index } = this.props
    // console.log(this.props.index)
    deleteItem(index)
  }

  shouldComponentUpdate(nextProps,nextState){
    return nextProps.content!==this.props.content?true:false
	}

  // 生命周期函数START
  /*
  componentWillReceiveProps(){
    console.log('14-child - componentWillReceiveProps')
  }
  */
  /* 

  顶层组件，它并没接收任何的props。可以把这个函数移动到子组件中。

  凡是组件都有生命周期函数，所以子组件也是有的，并且子组件接收了props，这时候函数就可以被执行了。

  这个时候再预览，就会看到componentWillReceiveProps执行了。那现在可以总结一下它的执行时间了。

  子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行。

  也就是说这个组件第一次存在于Dom中，函数是不会被执行的;

  如果已经存在于Dom中，函数才会被执行。

  */
	
  //当组件从页面中删除的时候执行
  /*
	componentWillUnmount(){
		console.log('21-child - componentWillUnmount')
  }
  */
  // 生命周期函数END
}

Todoitem.propTypes = {
  commonName: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

Todoitem.defaultProps = {
  commonName: '学习'
}
 
export default Todoitem;