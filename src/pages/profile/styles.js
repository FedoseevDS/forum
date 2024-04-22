import styled from 'styled-components';

export const Template = styled.div`
  display: flex;
  margin-top: 10px;
  height: 500px;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 100px;
  }

  border: 1px solid;
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  height: 400px;

  & > img {
    height: 80%;
  }
`;


