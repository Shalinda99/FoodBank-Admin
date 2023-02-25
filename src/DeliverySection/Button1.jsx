import React from "react";
import { useNavigate } from "react-router-dom";
import './Button1.css' ;
import { Button } from 'react-bootstrap';
const Button1 = (props) => {
  const navigate = useNavigate();
  const gotoNext = () => {
    navigate(props.page);
  };

  return (
    <div>
      <Button
        variant="secondary"
        className="my-2"
        onClick={() => gotoNext()}
        style={{ width: "200px", height: "30px" }}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default Button1;
