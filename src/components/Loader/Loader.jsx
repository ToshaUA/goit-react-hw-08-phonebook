import { RotatingLines } from 'react-loader-spinner';
import { Container } from 'style/Global.styled';
import { LoaderStyle } from './Loader.styled';

export const LoaderMount = () => {
  return (
    <Container>
      <RotatingLines
        strokeColor="#61677c"
        strokeWidth="3"
        animationDuration="0.75"
        width="90"
        visible={true}
      />
    </Container>
  );
};

export const Loader = () => {
  return (
    <LoaderStyle>
      <RotatingLines
        strokeColor="#61677c"
        strokeWidth="3"
        animationDuration="0.75"
        width="16"
        visible={true}
      />
    </LoaderStyle>
  );
};
