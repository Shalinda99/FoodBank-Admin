import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
import { set } from "react-hook-form";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [path, setpath] = useState("/");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Create the data object to send
  //   const data = {
  //     userName: userName,
  //     password: password,
  //   };

  //   // Make an API request with the data
  //   fetch("http://localhost:8080/createUser/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       if (responseData.loginSuccess) {
  //         // Login successful
  //         // Store the token in local storage
  //         localStorage.setItem("token", responseData.token);
      
  //         // Display success toast notification
      
  //         // Decode the token (assuming you have a function to decode tokens)
  //         const decodedToken = jwt_decode(localStorage.getItem("token"));
  //         const userId = decodedToken.userId;
  //         // const role = decodedToken.role;
  //         setpath(jwt_decode(localStorage.getItem("token")).role);
  //         console.log(decodedToken);
  //       } else {
  //         // Login unsuccessful
  //         // Display error toast notification
  //         toast.error(responseData.message);
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //       console.error(error);
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create the data object to send
    const data = {
      userName: userName,
      password: password,
    };
  
    // Make an API request with the data
    fetch("http://localhost:8080/createUser/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.loginSuccess) {
          // Login successful
          // Store the token in local storage
          localStorage.setItem("token", responseData.token);
  
          // Decode the token
          const decodedToken = jwt_decode(localStorage.getItem("token"));
          const userRole = decodedToken.role;
  
          // Store the user role in local storage
          localStorage.setItem("userRole", userRole);
  
          // Redirect to the appropriate page based on the user role
          switch (userRole) {
            case "Admin":
              navigate("/AdminHome");
              break;
            case "WareHouse":
              navigate("/warehouse");
              break;
            case "PackingSection":
              navigate("/packingSection");
              break;
            case "DeliverySection":
              navigate("/deliverySection");
              break;
            default:
              // Handle unknown roles or fallback to a default route
              navigate("/");
              break;
          }
        } else {
          // Login unsuccessful
          // Display error toast notification
          toast.error(responseData.message);
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
  


  return (
    <div className="wrapper ">
      <div className="leftcontainer d-flex flex-column  w-75">
        <div className="start ms-5 mt-4 mb-5 p-4">
          <h3>Welcome to</h3>
          <h2>FOOD BANK</h2>
        </div>
        <div className="middle mt-5 ms-4 p-5 d-flex flex-column">
          <h1>
            FEED THE
            <br /> NEED
          </h1>
          <h2>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;Share Food, Save Lives
          </h2>
        </div>
      </div>

      {/* <span className='leftcontainer d-flex align-items-center w-75'>
                <h2 className='d-flex justify-content-start ms-5'>Share Foods Save lives</h2>
            </span> */}
      <div className="login d-flex align-items-center justify-content-center flex-column ">
        <h1 class="text-center mb-5">
          <b>FOOD BANK</b>
        </h1>
        <div className="mb-5">
          <GrUserAdmin size={"5rem"} />
        </div>
        <h3 class="text-center">ADMIN PANEL</h3>
        <h4 class="text-center mb-5">Login to your Account</h4>
        <form className="needs-validation "
        onSubmit={handleSubmit}>
          <div className="form-group was-validated mb-2">
            <label htmlFor="username" className="form-label">
              User name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="User name"
              required
              value={userName} 
              onChange={handleUserNameChange}
            ></input>

            <div className="invalid-feedback">Please enter your username</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password} 
              onChange={handlePasswordChange}
            ></input>

            <div className="invalid-feedback">Please enter your password</div>
            <ToastContainer />
          </div>
          {/* <label for="admin-role">Choose a Admin Role:</label>
          <select
            name="adminroles"
            id="admin-role"
            onChange={(e) => setpath(e.target.value)}
          >
            {/* route accordingly */}
            {/* <option>Your role</option>
            <option value="/AdminHome">Admin</option>
            <option value="/warehouse">Warehouse</option>
            <option value="/packingSection">Packing section</option>
            <option value="/deliverySection">Delivery Section</option>
          </select>  */}

          <div class="col-md-12 text-center mt-5">
            <button
              type="submit"
              className="btn btn-success block mt-2"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;