import styled from 'styled-components';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

export const Template = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 10px;

  & > h1 {
    margin: 0;
  }

  & > a {
    color: white;

    &:hover {
      color: #ed7464;
    }
  }

  & > button {
    border-radius: 10px;
    padding: 5px;
    border: none;

    &:hover {
      cursor: pointer;
      background: #ed7464;
      border: none;
    }
  }
`;

export const Logo = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;

  & > img {
    width: 70px;
  }
`;

export const Profile = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;

  & > div {
    // display: flex;
    // gap: 10px;
    line-height: 20px;

    & > button {
      border-radius: 10px;
      padding: 5px 10px;
      border: none;

      &:hover {
        cursor: pointer;
        background: #ed7464;
        border: none;
      }
    }
  }
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 20px;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    & > span {
      align-self: center;
    }

    & > button {
      border-radius: 10px;
      border: none;
      width: 50px;

      &:hover {
        cursor: pointer;
        background: #ed7464;
        border: none;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: space-around;

    & > a {
      text-decoration: none;
      border-radius: 10px;
      width: 100%;
      text-align: center;
      background: #f0f0f0;
      color: black;

      &:hover {
        cursor: pointer;
        background: #ed7464;
        border: none;
      }
    }
`;
