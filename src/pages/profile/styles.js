import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const Template = styled(Content)`
  display: flex;
  margin-top: 10px;
  height: 500px;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 100px;
  }
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  height: 400px;

  & > img {
    height: 80%;
  }
`;

export const UserInfo = styled.div`
  // border: 1px solid;

  display: flex;
  flex-direction: column;

  & > p > span {
    margin-left: 10px;
    font-weight: 700;
  }
`;

export const Button = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;

  & > button {
    border-radius: 10px;
    padding: 5px 0;
    border: none;
    background: #0b2854e7;
    color: white;
    cursor: pointer;
    width: 80px;

    &:hover {
      background: #ed7464;
      border: none;
    }
  }
`;
