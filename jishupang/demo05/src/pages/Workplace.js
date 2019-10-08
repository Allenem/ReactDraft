import React from 'react';
import {  Route, Link } from 'react-router-dom';
import Math from './workplace/Math';
import English from './workplace/English';
import Politics from './workplace/Politics';

function Workplace(){
  return(
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/math">高数资料</Link></li>
          <li><Link to="/workplace/english">英语资料</Link></li>
          <li><Link to="/workplace/politics">政治资料</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>工作技能</h3></div>
        <Route path="/workplace/math/" component={Math} />
        <Route path="/workplace/english/" component={English} />
        <Route path="/workplace/politics/" component={Politics} />
      </div>
    </div>
  )
}

export default Workplace