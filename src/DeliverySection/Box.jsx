import React from 'react';
import './Box.css';

const Box = ({ children }) => {
  return (
    <div className="container">
      <div className="box">
        {children}
      </div>
    </div>
  );
};

export default Box;
