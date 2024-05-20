import styled from 'styled-components';

export const Editor = styled.div`
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

export const ButtonEditor = styled.div`
  display: flex;
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
