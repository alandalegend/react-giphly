import { useState } from "react";
import PropTypes from "prop-types";

export const GifItem = ({ title, url, id }) => {
  const [inputValue, setInputValue] = useState([]);

  return (
    <div className="card">
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
