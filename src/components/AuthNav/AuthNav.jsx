import { AuthNavList, AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavList>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </AuthNavList>
  );
};
