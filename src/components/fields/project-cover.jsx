import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const sizeOptions = {
  xs: "62px",
  sm: "160px",
  md: "210px",
};

const Cover = styled.div`
  width: 400px;
  height: ${({ size }) => sizeOptions[size]};
  margin: 0;

  @media (max-width: 540px) {
    width: 320px;
  }
`;

const Img = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const ProjectCover = ({ src, size }) => {

  ProjectCover.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md']).isRequired,
  };

  return (
    <Cover size={size}>
      <Img src={src} alt={"covers"} />
    </Cover>
  );
};

export default ProjectCover;