import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Cover = styled.div`
  display: flex;
  align-self: start;

  @media (max-width: 1000px) {
    justify-content: center;
    // display: none;
  }
`;

const Img = styled.img`
  width: 100%;

  @media (max-width: 1000px) {
    width: 75%;
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
