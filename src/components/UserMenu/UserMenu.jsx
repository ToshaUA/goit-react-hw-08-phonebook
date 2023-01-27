import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Wrapper, Username, ButtonlogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>User : {user.name}</Username>
      <ButtonlogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonlogOut>
    </Wrapper>
  );
};
