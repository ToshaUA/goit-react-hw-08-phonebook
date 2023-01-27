import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 12px;
  color: #2a363b;
`;

export const AuthNavLink = styled(NavLink)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  font-weight: 700;
  text-shadow: 1px 1px 0 #fff;
  color: #2a363b;
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
