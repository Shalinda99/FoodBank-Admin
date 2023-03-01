import React from "react";
import { useNavigate } from "react-router-dom";
import './Button1.css' ;
// import { Button } from 'react-bootstrap';
const Button1 = (props) => {
  const navigate = useNavigate();
  const gotoNext = () => {
    navigate(props.page);
  };

  return (
    <div>
      {/* <Button
        variant="secondary"
        className="my-2"
        onClick={() => gotoNext()}
        style={{ width: "200px", height: "35px" }}
      >
        {props.text}
      </Button> */}
      <button type="button" class="btn btn-secondary" onClick={() => gotoNext()}>{props.text}</button>

    </div>
  );
};

export default Button1;
