import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 25px;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;
export const Input = styled.input`
  color: #61677c;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  font-weight: bold;
  letter-spacing: -0.2px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  max-width: 500px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 320px;
  padding: 12px;
  background-color: #ebecf0;

  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  height: 16px;
  border-radius: 8px;
  line-height: 0;
  margin: auto;
  font-size: 19.2px;
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 320px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;
