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
    border-radius: 10px;
  }
`;

export const UserInfo = styled.div`
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
    padding: 5px 10px;
    border: none;
    background: #0b2854e7;
    color: white;
    cursor: pointer;

    &:hover {
      background: #ed7464;
      border: none;
    }
  }
`;
