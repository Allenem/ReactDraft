import React from 'react';
import { connect } from 'react-redux';

const Todolist = (props) => {
  let { inputValue,list,inputChange,clickBtn,delItem } = props;
  return ( 
    <div>
      <div>
        <input value={inputValue} onChange={inputChange}/>
        <button onClick={clickBtn}>提交</button>
      </div>
      <ul>
        {
          list.map((item,index)=>{
            return(
              <li key={index+item} onClick={()=>delItem(index)}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

/*class Todolist extends Component {

  render() { 
    let { inputValue,list,inputChange,clickBtn,delItem } = this.props;
    return ( 
      <div>
        <div>
          <input value={inputValue} onChange={inputChange}/>
          <button onClick={clickBtn}>提交</button>
        </div>
        <ul>
          {
            list.map((item,index)=>{
              return(
                <li key={index+item} onClick={()=>delItem(index)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }

}*/

// 映射器，状态映射成属性
const stateToPrpos = (state) => {
  return{
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToPrpos = (dispatch) => {
  return{
    inputChange(e){
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },
    clickBtn(){
      let action = {
        type: 'add_item'
      }
      dispatch(action)
    },
    delItem(index){
      let action = {
        type: 'del_item',
        index
      }
      dispatch(action)
    }
  }
}
 
export default connect(stateToPrpos,dispatchToPrpos)(Todolist);