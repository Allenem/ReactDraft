import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        {cid:123,title:'博文1'},
        {cid:456,title:'博文2'},
        {cid:789,title:'博文3'}
      ]
     }
     this.props.history.push("/home/")
  }
  render() { 
    return ( 
      <div>
      {/*<Redirect to='/home/' />*/}
        <h2>Allenem.com</h2> 
        <ul>
          {
            this.state.list.map((item,index) => {
              return(
                <li key={index}>
                  <Link to={'/list/'+item.cid}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default Index;