import { useState } from "react";

export const GifItem = ({ title, url }) => {
  const [inputValue, setInputValue] = useState([]);

  return (
    <div className="card">
      <img src={url} />
      <p>{title}</p>
    </div>
  );
};
