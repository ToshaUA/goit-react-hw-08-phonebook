import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
`;

export const Link = styled(NavLink)`
  color: #2a363b;

  &.active {
    color: red;
  }
`;
