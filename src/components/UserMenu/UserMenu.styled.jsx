import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;
`;

export const Username = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const ButtonlogOut = styled.button`
  display: flex;
  justify-content: space-evenly;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  align-items: center;
  font-weight: 700;
  text-shadow: 1px 1px 0 #fff;
  color: #ae1100;
  align-items: center;
  text-decoration: none;
  width: 100px;
  height: 30px;
  border-radius: 30px;
  font-size: 15px;
  font-family: inherit;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:before {
    content: '';
    width: 0;
    height: 30px;
    border-radius: 30px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }
  &:hover::before {
    width: 100px;
  }
  &.active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    color: #61677c;
  }
`;
