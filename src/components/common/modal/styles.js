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
    gap: 10px;
    padding: 20px;
    margin-left: 35%;
    margin-right: 35%;

    & > span {
      color: black;
      font-weight: 700;
    }

    & > button {
      color: white;
      line-heigh: 0;
      align-self: center;
      border-radius: 10px;
      padding: 5px 10px;
      border: none;
      background: #0b2854e7;

      &:hover {
        cursor: pointer;
        background: #ed7464;
        border: none;
      }
    }
  }
`;
