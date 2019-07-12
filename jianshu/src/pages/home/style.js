import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
    border-radius: 6px;
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  /*margin-left: -18px;*/
  margin-left: 0;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-right: 18px;
  margin-left: 0;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  &.more{
    border: none;
    background: #fff;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  margin-left: 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 4px;
  }
`

export const ListInfo = styled.div`
  float: left;
  width: 458px;
  margin-left: 0;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  padding: 30px 0 0 0;
  margin: -4px 0 0 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  margin: 0 0 6px 0;
  width: 100%;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: 100%;
`

export const DownloadAppWrapper = styled.div`
  overflow: hidden;
  margin: 10px 0 30px 0 ;
  padding: 10px 22px 10px 22px;
  width: 234px;
  height: 60px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  .qrCode{
    display: block;
    float: left;
    width: 60px;
    height: 60px;
  }
`

export const DownloadAppInfo = styled.div`
  display: block;
  float: left;
  top: 1000px;
  margin-left: 12px;
  width: 143px;
  height: 44px;
  line-height: 25px;
  .title{
    font-size: 15px;
    color: #333;
  }
  .des{
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`

export const WriterWrapper = styled.div`
  width: 278px;
  height: 300px
  line-height: 300px;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
`

export const LoadMore = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  padding-top: 20px;
  box-sizing: border-box; /*不撑开*/
  right: 40px;
  bottom: 50px;
  width: 52px;
  height: 52px;
  line-hight: 20px;
  text-align: center;
  background: #fff;
  border: 1px solid #ccc;
  font-size: 20px;
  cursor: pointer;
`