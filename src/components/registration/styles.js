import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: black;
  overflow: hidden;

  & > label {
    line-height: 20px;
  }

  & > input {
    border-radius: 10px;
    padding: 5px 10px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  margin-top: 10px;

  & > button {
    border-radius: 10px;
    color: white;
    background: #0b2854e7;
    border: none;
    width: 80px;
    padding: 5px;

    &:hover {
      cursor: pointer;
      background: #ed7464;
      border: none;
    }
  }
`;
