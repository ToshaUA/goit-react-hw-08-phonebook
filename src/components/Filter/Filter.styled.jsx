import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InpuStyle = styled.input`
  color: #61677c;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  font-weight: bold;
  letter-spacing: -0.2px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  width: 200px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 320px;
  padding: 8px;
  background-color: #ebecf0;

  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;

export const FilterBox = styled.div`
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 10px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;
