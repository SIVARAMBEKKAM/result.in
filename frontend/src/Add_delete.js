/* import React from 'react'
import Teachernav from './teachernav'
import Style1 from './teacher.module.css';
import { useState } from 'react';
import axios from 'axios';

function Add_delete() {
    const [student, setStudent] = useState({ name: "", class: "", roll: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/addStudent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });

    if (response.ok) {
      alert("✅ Data inserted successfully!");
      setStudent({ name: "", roll: "", marks: "" });
    } else {
      alert("❌ Error inserting data");
    }
  };
  return (
  <><Teachernav/>
  <div className={Style1.main}>
    <div className={Style1.heading}>
      Add Student</div>    <div className={Style1.inputs}>
        <label>Enter the Student Name</label>
        <br/>
        <input type="text" placeholder='enter the name' name='name' onChange={handleChange}>
        </input>
      </div><div className={Style1.inputs}>
        <label>Enter the  class</label>
        <br/>
         <select name='class' onChange={handleChange}>
      <option value="">-- Select an Class --</option>
  <option value="midterm">10</option>
  <option value="final"> 9</option>
  <option value="quiz">8</option>
  <option value="practical">7</option>
    </select>
      </div><div className={Style1.inputs}>
        <label>Enter the Student roll no</label>
        <br/>
        <input type="text" placeholder='enter the name' name='roll' onChange={handleChange}>
        </input>
      </div>
      <div className={Style1.save}><button  type='submit' onClick={handleSubmit}>ADD</button></div>
      <div></div>  </div></>
  )
}

export default Add_delete; *//* import React from 'react'
import Teachernav from './teachernav'
import Style1 from './teacher.module.css';
import { useState } from 'react';
import axios from 'axios';

function Add_delete() {
    const [student, setStudent] = useState({ name: "", class: "", roll: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/addStudent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });

    if (response.ok) {
      alert("✅ Data inserted successfully!");
      setStudent({ name: "", roll: "", marks: "" });
    } else {
      alert("❌ Error inserting data");
    }
  };
  return (
  <><Teachernav/>
  <div className={Style1.main}>
    <div className={Style1.heading}>
      Add Student</div>    <div className={Style1.inputs}>
        <label>Enter the Student Name</label>
        <br/>
        <input type="text" placeholder='enter the name' name='name' onChange={handleChange}>
        </input>
      </div><div className={Style1.inputs}>
        <label>Enter the  class</label>
        <br/>
         <select name='class' onChange={handleChange}>
      <option value="">-- Select an Class --</option>
  <option value="midterm">10</option>
  <option value="final"> 9</option>
  <option value="quiz">8</option>
  <option value="practical">7</option>
    </select>
      </div><div className={Style1.inputs}>
        <label>Enter the Student roll no</label>
        <br/>
        <input type="text" placeholder='enter the name' name='roll' onChange={handleChange}>
        </input>
      </div>
      <div className={Style1.save}><button  type='submit' onClick={handleSubmit}>ADD</button></div>
      <div></div>  </div></>
  )
}

export default Add_delete; */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Teachernav from "./teachernav";
import Style1 from "./teacher.module.css"
const Add_delete = () => {
  const initialUser = {
    name: "",
    class1: 0,
    roll: "",
  };

  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8009/api/user", user);
       toast.success(response.data.message);
         e.target.reset();

 setUser(initialUser);
    } catch (error) {
 const errorMessage = error.response?.data?.message; 

    // Display the specific server message or fall back to a generic message
    toast.error(errorMessage || "Failed to add student. Check network.", { 
        position: "top-right" 
    });
    }
  };

  return (
   
    <div className={Style1.adduser}>
      <Teachernav/>{/* 
      <Link to="/Teacherdashboard" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link> */}

      <div className={Style1.inpute1}><h3 className={Style1.heading}>Add New Student</h3></div>
      <form className={Style1.addfrom} onSubmit={submitForm}>
        <div className={Style1.inpute1}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter name"
            onChange={inputHandler}
          />
        </div>

        <div className={Style1.inpute1}>
          <label htmlFor="class1">Class:</label>
                <select name='class1' onChange={inputHandler}>
      <option value="class1">-- Select an Class --</option>
  <option value="10">10</option>
  <option value="9"> 9</option>
  <option value="8">8</option>
  <option value="7">7</option>
    <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
                    <option value="1">1</option>

    </select>
        </div>

        <div className={Style1.inpute1}>
          <label htmlFor="roll">Roll No:</label>
          <input
            type="text"
            id="roll"
            name="roll"
            autoComplete="off"
            placeholder="Enter roll number"
            onChange={inputHandler}
          />
        </div>

        <div className={Style1.inpute1}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_delete;
