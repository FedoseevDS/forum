import styled from 'styled-components';

export const Template = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: rgba(154, 204, 217, 0.34);
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 100px;

  & > div {
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    margin-left: 35%;
    margin-right: 35%;
  }
`;

export const CreateForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > span {
    font-weight: 700;
  }

  & > input {
    border-radius: 10px;
    padding: 5px 10px;
    border: 1px solid #0b2854e7;
  }
`;

export const WrapperAuthorization = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > span {
    font-weight: 700;
    line-height: 15px;
    color: black;
  }

  & > input {
    padding: 5px 10px;
    border-radius: 10px;
  }

  & > button {
    color: white;
    line-heigh: 0;
    align-self: center;
    border-radius: 10px;
    padding: 5px;
    border: none;
    background: #0b2854e7;

    &:hover {
      cursor: pointer;
      background: #ed7464;
      border: none;
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
    width: 100px;

    &:hover {
      cursor: pointer;
      background: #ed7464;
      border: none;
    }
  }
`;
