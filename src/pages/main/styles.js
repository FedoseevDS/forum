import styled from 'styled-components';
import { Layout } from 'antd';

export const Template = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 500px;
  margin-top: 10px;

  & > span {
    font-weight: 700;
  }
`;

export const Button = styled.div`
  display: flex;
  gap: 20px;

  & > button {
    width: 200px;
    cursor: pointer;
    border-radius: 10px;
    background: #0b2854e7;
    border: none;
    padding: 5px;
    color: white;

    &:hover {
      background: #ed7464;
      border: none;
    }
  }

  & > button:disabled {
    background: gray;
    cursor: no-drop;
  }
`;

export const WrapperTable = styled.table`
  & tr {
    & th {
      border: 1px solid;

      &:nth-child(1) {
        width: 5%;
      }
      &:nth-child(2) {
        width: 5%;
      }
      &:nth-child(3) {
        width: 5%;
      }
    }

    & td {
      border: 1px solid;
      text-align: center;
    }
  }
`;

export const BlankItem = styled.span`
  border: 1px solid;
  padding: 5px;
  text-align: center;
`;
