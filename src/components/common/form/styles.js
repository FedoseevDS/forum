import styled from 'styled-components';

export const Template = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;

  & div {
    display: flex;
    flex-direction: column;

    & > label {
      padding: 5px 0;
      color: black;
    }

    & > input {
      border-radius: 10px;
      width: 100%;
      padding: 5px 10px;
      border: 1px solid #0b2854e7;
    }

    & > span {
      color: red;
      text-align: center;
    }
  }
`;

export const Button = styled.div`
  flex-direction: row !important;
  justify-content: end;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  & > button {
    border-radius: 10px;
    background: #0b2854e7;
    border: none;
    padding: 5px 10px;
    color: white;
    min-width: 100px;

    &:hover {
      cursor: pointer;
      background: #ed7464;
      border: none;
    }
  }
`;
