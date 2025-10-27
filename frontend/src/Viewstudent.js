/* import React from 'react'
import Teachernav from './teachernav';
import Style1 from './teacher.module.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Viewstudents
() {
const [Student ,setStudent]=useState([]);
useEffect(()=>{
  const fetch=async()=>{
const data=await axios.get("http://localhost:8000/api/add");
setStudent(data.data);
  };
  fetch();
},[]
)
          const navigate = useNavigate();
  return (
    <>
    <Teachernav/>
    <div className={Style1.main1}>
      <div className={Style1.heading_body}>
        <div className={Style1.view_heading}>
          Students List
        </div>
        <button className={Style1.viewbutton} onClick={()=>navigate('/Add_delete')}>
          AddStudnet
        </button>
      </div>
    <select>
      <option value="">-- Select an Class --</option>
  <option value="midterm">10</option>
  <option value="final"> 9</option>
  <option value="quiz">8</option>
  <option value="practical">7</option>
    </select>
    </div>
    <div>
      <table>
        {
          Student.map((s,index)=>{
            return(
              <tr>
              <td>{s.name}</td>
                           <td>{s.roll}</td>
                            <td>{s.class1}</td>
                             <td>edit/delete</td>
                           </tr>
            )
          })
        }
        <td></td>
      </table>
    </div>
    </>
  )
}

export default Viewstudents;

 */import React, { useEffect, useState } from "react";
import Teachernav from "./teachernav";
import axios from "axios";
import { Link } from "react-router-dom";import Style1 from './teacher.module.css';

import toast from "react-hot-toast";

const ViewStudents = () => {
  const [users, setUsers] = useState([]);
  const [classFilter, setClassFilter] = useState(0); // class filter

  // Fetch students (optionally by class)
  const fetchStudents = async (cls) => {
    try {
  const url = cls
      ? `http://localhost:8009/api/users/class1/${cls}` // <-- CORRECT FIX
      : "http://localhost:8009/api/users";
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.log("❌ Error fetching users:", error);
      toast.error("Failed to fetch students");
    }
  };

  useEffect(() => {
    fetchStudents(classFilter);
  }, [classFilter]);

  // Delete student
  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8009/api/delete/user/${userId}`
      );
      setUsers((prev) => prev.filter((user) => user._id !== userId));
      toast.success(response.data.message || "User deleted successfully", {
        position: "top-right",
      });
    } catch (error) {
      console.log("❌ Error deleting user:", error);
      toast.error("Failed to delete user");
    }
  };
  // ViewStudents.js (Add this function)

// Promote students in the currently filtered class
// ViewStudents.js (REPLACE promoteClassHandler with this global version)

// Global Promotion function
const promoteAllClassesHandler = async () => {
  if (!classFilter) {
    toast.error("Please select a class first!");
    return;
  }

  const isConfirmed = window.confirm(
    `Are you sure you want to promote all students in Class ${classFilter}?`
  );
  if (!isConfirmed) return;

  try {
    const response = await axios.post(
      `http://localhost:8009/api/promote/class1/${classFilter}` // <-- class in URL
    );
  
    toast.success(response.data.message || "Promotion successful", {
      position: "top-right",
    });

    fetchStudents(classFilter); // refresh list
  } catch (error) {
    console.log("❌ Error promoting classes:", error);
    const msg = error.response?.data?.message || "Failed to promote classes";
    toast.error(msg);
  }
};




  return (<>
      <Teachernav />
      
    <div className={Style1.StudentTable}>

      {/* Class Filter */}
      <div style={{ marginBottom: "20px" }}>
        <label>Filter by Class: </label>
        <select
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
        >
          <option value="">-- All Classes --</option>
          <option value="10" >10</option>
          <option value="9">9</option>
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

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Class</th>
            <th>Roll</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.class1}</td>
                <td>{user.roll}</td>
                <td className="actionButtons">
                  <Link
                    to={`/update/${user._id}`}
                    className={Style1.editimg}
                  >
                    <i >
                      <img src="editlogo.png" width="40px" height="40px" alt="edit"/>
                    </i>
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
{/* 
<div style={{ marginBottom: "20px", display: 'flex', gap: '15px', alignItems: 'center' }}>
      <label>Filter by Class: </label>
      <select
        value={classFilter}
        onChange={(e) => setClassFilter(e.target.value)}
      >
        <option value="">-- All Classes --</option>
        <option value="10">10</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>    <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
                    <option value="1">1</option>
      </select> */}
      
    {/*  
      <button
        onClick={promoteAllClassesHandler} // <-- Use the new global handler
        className="btn btn-warning"
        style={{ padding: '5px 15px' }}
      >
        Global Promote All ⬆️
      </button>  </div> */}
   
    
      <Link to="/Add_delete" className={Style1.addButton}>
        Add User <i className="fa-solid fa-user-plus"></i>
      </Link>
    </div>
    </>
  );
};

export default ViewStudents;
