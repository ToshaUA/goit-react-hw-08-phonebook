import { RotatingLines } from 'react-loader-spinner';
import { Container } from 'style/Global.styled';

export const Loader = () => {
  return (
    <Container>
      <RotatingLines
        strokeColor="#61677c"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </Container>
  );
};
