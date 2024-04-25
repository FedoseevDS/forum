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
  background: red;
  width: 150px;
  display: flex;
  justify-content: center;

  & > div > button {
    border-radius: 10px;
    padding: 5px 10px;
    border: none;

    &:hover {
      cursor: pointer;
      background: #ed7464;
      border: none;
    }
  }
`;
