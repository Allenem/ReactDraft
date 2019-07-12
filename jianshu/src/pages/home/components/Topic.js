import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem,
} from '../style';

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item)=>{
            return (
              <TopicItem key={item.get('id')}>
                <img
                  className='topic-pic'
                  src={item.get('imgUrl')}
                  alt=''
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
        
        <TopicItem className='more'>
          更多热门专题 >
        </TopicItem>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','topicList'])
});

export default connect(mapStateToProps,null)(Topic); // 拿数据，不用改数据