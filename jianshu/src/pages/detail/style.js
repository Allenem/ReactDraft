import styled from 'styled-components';

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
`

export const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`

export const Content = styled.div`
  color: #2f2f2f;
  img{
    width: 70%;
  }
  p{
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
  .image-package {
    padding-bottom: 25px;
    width: 700px;
    /*margin-left: -40px;*/
    margin 0 auto;
    text-align: center;
  }
  .alt{
    min-width: 20%;
    max-width: 80%;
    min-height: 22px;
    display: inline-block;
    padding: 10px;
    margin: 0 auto;
    border-bottom: 1px solid #d9d9d9;
    font-size: 14px;
    color: #969696;
    line-height: 1.7;
  }
`