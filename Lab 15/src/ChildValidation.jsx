import PropTypes from "prop-types";

const ChildValidation = ({ message }) => {
  return <p>{message}</p>;
};

ChildValidation.propTypes = {
  message: PropTypes.string.isRequired
};

export default ChildValidation;
