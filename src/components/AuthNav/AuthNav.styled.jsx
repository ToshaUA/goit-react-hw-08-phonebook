import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavList = styled.div`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
`;

export const AuthNavLink = styled(NavLink)`
  color: #2a363b;

  &.active {
    color: red;
  }
`;
