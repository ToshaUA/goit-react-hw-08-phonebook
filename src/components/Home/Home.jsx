import { Container } from 'style/Global.styled';
import { Accent, Topic, Option } from 'components/Home/Home.styled';

export const HomePege = () => {
  return (
    <Container>
      <Topic>Welcome to your personal contact book!</Topic>
      <Option>
        Click <Accent>register</Accent> if you want to start using or
        <Accent>log in</Accent> if you are already with us!
      </Option>
    </Container>
  );
};
