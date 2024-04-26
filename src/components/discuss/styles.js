import styled from 'styled-components';

export const Template = styled.div`
  border: 1px solid;
  margin-top: 10px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    padding: 10px;

    & > span:nth-child(2) {
      font-weight: 700;
      margin-left: 20px;
    }
  }
`;

export const Block = styled.div`
  border-top: 1px solid;
  width: 95%;

  & > div {
    display: flex;
    gap: 10px;

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
  }
`;
