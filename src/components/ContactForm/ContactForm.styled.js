import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  padding: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 250px;
  margin-top: 10px;
  border: 1px solid black;
  outline: none;
`;

export const Button = styled.button`
  width: 150px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 6px;
  border: 1px solid black;
  padding: 3px;
`;
