import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import Navbar from "./navbar";
import Style1 from "./teacher.module.css"  ;
function Teacherlogin1() {
  const inputref1 = useRef(); 
  const inputref2 = useRef(); 
  const navigate = useNavigate();

  const login1 = (id, password) => {
  if (id === "" || password === "") {
    alert("Enter both ID and password");
  } else if (id === "admin" && password === "admin@423") {
    navigate('/Teacherdashboard');
  } else {
    alert("Wrong username or password");
  }

  inputref1.current.value = "";
  inputref2.current.value = "";
};


  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className={Style1.inpute1}>
          <h2 className={Style1.heading}>Teacher login</h2></div>
          <br />
          <div className={Style1.input1}>
            <div className={Style1.inpute1}>
              <label className={Style1.label}>UserName</label>
              <br />
              <input
                type="text"
                placeholder="Enter UserName"
                className={Style1.my_input}
                ref={inputref1}
              />
            </div>

            <div className={Style1.inpute1}>
              <label className={Style1.label}>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                className={Style1.my_input}
                ref={inputref2}
              />
            </div>
          </div>

          <div className={Style1.inpute1}>
            <button onClick={() => login1(inputref1.current.value, inputref2.current.value)}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teacherlogin1;
