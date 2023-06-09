import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";
// import { Button } from 'react-bootstrap';
const Button1 = (props) => {
  const navigate = useNavigate();
  const gotoNext = () => {
    navigate(props.page);
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => gotoNext()}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button1;
