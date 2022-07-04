import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  document.title = "fuku - " + props.title;
  return <div>{props.children}</div>;
};

Main.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Main;
