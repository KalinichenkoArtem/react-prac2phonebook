import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 30px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: baseline;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 5px;
  width: 120px;
  height: 30px;
`;
