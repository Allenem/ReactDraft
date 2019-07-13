import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  padding: 100px 0;
  height: 50vh;
  background: #eee;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 200px;
  margin: 0 auto;
  padding: 50px 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 50px;
  line-height: 30px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 10px auto;
  color: #777;
  background: #f7f7f7;
`

export const Button = styled.div`
  width: 300px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #3194d0;
  border-radius: 20px;
  margin: 10px auto;
  text-align: center;
  cursor: pointer;
`
