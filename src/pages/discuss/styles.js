import styled from 'styled-components';

export const Template = styled.div`
  margin-top: 10px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  & > div {
    margin-top: 10px;

    & > span:nth-child(2) {
      font-weight: 700;
      margin-left: 20px;
    }
  }
`;

export const Border = styled.div`
  border: 1px solid;
  width: 90%;
`;

export const Comments = styled.div`
  width: 45%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  & > div {
    border-radius: 10px;
    width: 65%;
    display: flex;
    flex-direction: column;
    bakcground: red;

    & > div:nth-child(1) {
      display: flex;
      padding: 10px;
      gap: 10px;

      & > div {
        display: flex;

        & > img {
          border-radius: 10px;
        }
      }

      & > span {
        width: 100%;
        padding: 5px 10px;
        background: white;
        border-radius: 10px;
        word-break: break-all;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
      border-top: 1px solid;

      & > div {
        display: flex;
        gap: 20px;

        & > span:nth-child(2) {
          font-weight: 700;
        }

        & > span:nth-child(4) {
          font-weight: 700;
        }
      }

      & > button {
        border-radius: 10px;
        border: none;
        color: white;
        background: #0b2854e7;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
          background: #ed7464;
          border: none;
        }
      }
    }
  }
`;

export const Block = styled.div`
  & > form {
    display: flex;
    gap: 10px;

    & > div {
      display: flex;
      justify-content: center;
      gap: 10px;

      & > button {
        border: none;
        display: flex;
        border-radius: 10px;
        background: #0b2854e7;
        cursor: pointer;
        align-items: center;
        padding: 0 5px 0 10px;

        & > span {
          transform: scale(1.4);

          & > svg > path {
            fill: white;
          }
        }

        &:hover {
          background: #ed7464;
          border: none;
        }
      }
    }
  }

  & > button {
    border: none;
    border-radius: 10px;
    background: #0b2854e7;
    color: white;
    cursor: pointer;
    padding: 5px 10px;

    &:hover {
      background: #ed7464;
      border: none;
    }
  }
`;

export const Input = styled.div`
  & > label {
    font-weight: 700;
  }

  & > input {
    width: 400px;
    border-radius: 10px;
    padding: 5px 10px;
  }
`;
