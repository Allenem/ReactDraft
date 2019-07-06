import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  render() {
    const {content,test} = this.props;
    return (
      <div
        onClick={this.handleClick}
        //key={this.props.index}
      >
        {test} - {content}
      </div>
    )
  }

  handleClick() {
    const {deleteItem,index} = this.props;
    deleteItem(index);
    //alert(this.props.index);
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired, //要求一定检验
  comtent: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;