import styled from 'styled-components';

export const Template = styled.div`
  margin-top: 10px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const Border = styled.div`
  border: 1px solid;
  margin-bottom: 10px;
  width: 90%;
`;

export const Comments = styled.div`
  width: 45%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;

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
  & > div:nth-child(1) {
    display: flex;
    gap: 10px;

    & > label {
      font-weight: 700;
    }
  }
`;

export const WrapperEditor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;

  & > div:nth-child(2) {
    & > div:nth-child(2) {
      &.ck-reset_all {
        :not(.ck-reset_all-excluded *) {
          font-size: 10px;
          border-radius: 10px 10px 0 0;
        }
      }
    }

    & > div:nth-child(3) {
      &.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
        border-radius: 0 0 10px 10px;
        font-size: 14px;
      }

      &.ck.ck-editor__main > .ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
        border-radius: 0 0 10px 10px;
      }
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: end;
  gap: 20px;
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
