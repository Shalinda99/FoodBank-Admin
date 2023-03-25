import React from "react";
import { useNavigate } from "react-router-dom";
import './Button1.css' ;
const Button = (props) => {
  const navigate = useNavigate();
  const gotoNext = () => {
    navigate(props.page);
  };

  return (
    <div>
      <button type="button" class="btn btn-secondary"

        onClick={() => gotoNext()}
        style={{ width: "200px", height: "30px" }}
      >
        {props.text}
      </button>
    </div>


  );
};

export default Button;
