import React from "react";

const Button = ({ title, className }) => {
  return (
    <div>
      <button className={`text-white py-2 px-4 rounded ${className}`}>
        {title}
      </button>
    </div>
  );
};

export default Button;
