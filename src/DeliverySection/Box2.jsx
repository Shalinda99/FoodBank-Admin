import React from 'react';
import './Box2.css';

const Box2 = ({ text }) => {
  return (
    <div className="outer-container">
      <div className="box-container">
        <p className="box-text">{text}</p>
      </div>
    </div>
  );
};

export default Box2;
