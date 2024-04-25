import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > label {
    color: black;
    line-height: 20px;
  }

  & > input {
    border-radius: 10px;
    padding: 5px 10px;
  }

  & > div {
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
  }
`;
