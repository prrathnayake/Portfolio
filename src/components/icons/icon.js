import React from "react";
import PropTypes from "prop-types";
import IconGitHub from "./github";
import IconInstagram from "./instagram";
import IconLinkedin from "./linkedin";
import IconExclamation from "./exclamation";
import IconClose from "./close";

const Icon = ({ name, height }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "Linkedin":
      return <IconLinkedin />;
    case "close":
      return <IconClose height={height}/>;
    default:
      return <IconExclamation />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
