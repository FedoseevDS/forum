import styled from 'styled-components';

export const Template = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: rgba(154, 204, 217, 0.34);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding-top: 100px;

  & > div {
    background: white;
    height: 200px;
    width: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;

    & > span {
      font-weight: 700;
    }

    & > input {
      border-radius: 10px;
      padding: 5px;
      border: 1px solid #0b2854e7;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;

  & > button {
    border-radius: 10px;
    background: #0b2854e7;
    border: none;
    padding: 5px 10px;
    color: white;

    &:hover {
      cursor: pointer;
      background: #ed7464;
      border: none;
    }
  }
`;
