import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const Cover = styled.div`
  display: flex;
  justify-content: flex-start;

   @media(max-width: 1200px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 90%;

  @media (max-width: 500px){
    width: 95%;
  }
`;

const ProjectCover = ({ src }) => {

  ProjectCover.propTypes = {
    src: PropTypes.string.isRequired,
  };

  return (
    <Cover>
      <Img src={src} alt={"covers"} />
    </Cover>
  );
};

export default ProjectCover;