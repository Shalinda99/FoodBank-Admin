import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "./Button.css";
// import { Button } from 'react-bootstrap';
const Button2 = (props) => {
  const navigate = useNavigate();
  const gotoNext = () => {
    navigate(props.page);
  };

  return (
    <div class="btn d-flex justify-content-end">
      <button type="button" class="btn btn-warning" onClick={() => gotoNext()}>
        <AiFillDelete className="icon" />
        {props.text}
      </button>
    </div>
  );
};

export default Button2;
